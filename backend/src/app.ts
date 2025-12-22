import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import {User} from "./types";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

interface DbData {
  users: User[];
}

const db = new Low<DbData>(new JSONFile<DbData>(".data/user-data.json"), { users: [] });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Endpoints ----------------------------------------------

//GET /users - retrieves all users
app.get("/users", async (req, res) => {
  try {
    await db.read();
    const usersData = db.data.users.map((user) => {
      const { password: _password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
    res.json(usersData);
  } catch (error) {
    console.error("Error during returning data list: ", error);
  }
});

//GET /users/:id - retrives a specific user
app.get("/users/:id", async (req, res) => {
  try {
    await db.read();
    const userId = req.params.id;
    const user = db.data.users.find((u) => u._id === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    const { password: _password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
      } catch (error) {
    console.error("Error during returning a specific user: ", error);
  }
});

//PATCH /users/:id - update a specific users role
app.patch("/users/:id", async (req, res) => {
  try {
    await db.read();
    const index = db.data.users.findIndex((u) => u._id == req.params.id);

    if (index === -1)
      return res.status(404).json({ message: "User not found" });

    const currUser = db.data.users[index];
    const updatedUser = { ...currUser, ...req.body };
    db.data.users[index] = updatedUser;
    await db.write();

    // res.json({ success: true });
    const { password: _password, ...userWithoutPassword } = updatedUser;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error("update failed: ",error )
    res.status(500).json({ message: "Update failed!!!" });
  }
});

//POST /sign-in - authenticate user
app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  try {
    await db.read();
    const user = db.data.users.find((u) => u.email == email);

    if (!user) {
      return res.status(401).json({ message: "User doesn't exist" });
    }

    // Compare password hashes
    if(!user.password) return res.status(401).json({message: "Invalid user pass"})
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const { password: _password, ...userWithoutPassword } = user;
      res.json({
        user: userWithoutPassword,
      });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Internal server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
  
});

//POST /sing-up
app.post("/sign-up", async (req, res) => {
  const { first_name, last_name, password, email } = req.body;

  try {
    await db.read();

    const emailExists = db.data.users.some((user) => user.email === email);
    if (emailExists) {
      return res
        .status(400)
        .json({
          message: "Email address already exists. Please use another email.",
        });
    }
    const hash = await bcrypt.hash(password, 10);

    const currId = db.data.users.length + 1;
    const newUser = {
      _id: currId.toString(),
      isRemoteWork: null,
      user_avatar: "/pics/leverx.jpg",
      first_name: first_name,
      last_name: last_name,
      first_native_name: "N/A",
      last_native_name: "N/A",
      middle_native_name: "N/A",
      department: "N/A",
      building: "N/A",
      room: "N/A",
      date_birth: {
        year: "1",
        month: "1",
        day: "1234",
      },
      desk_number: "N/A",
      manager: {
        id: "1",
        first_name: "Marya",
        last_name: "Kizim",
      },
      phone: "N/A",
      email: email,
      skype: "N/A",
      cnumber: "N/A",
      citizenship: "N/A",
      visa: [
        {
          issuing_country: "N/A",
          type: "N/A",
          start_date: "N/A",
          end_date: "N/A",
        },
      ],
      role: "employee",
      password: hash,
    };

    db.data.users.push(newUser);
    await db.write();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    console.error("Error during creating a new user: " ,error)
    res.status(500).json({ message: "Error during creatng a new user" });
  }
})

app.listen(PORT, () => {
  console.warn(`Server running on http://localhost:${PORT}`);
})
