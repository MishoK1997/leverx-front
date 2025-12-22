import { Employee } from "../types";

/**
 * You can search with name,  last name , id , full name, spaces between the first and last
 * name is acceptable. Reverse also.
 */

export default function basicSearchUtil(
  allUsers: Employee[],
  term: string,
): Employee[] {
  //Normalize term
  const termNorm = term.toLowerCase().trim().replace(/\s+/g, " ").trim();

  return allUsers.filter((user) => {
    const firstName = user.first_name.toLowerCase();
    const lastName = user.last_name.toLowerCase();

    const fullName = `${firstName} ${lastName}`;
    const fullNameReverse = `${lastName} ${firstName}`;

    // Check matches
    return (
      user._id.toLowerCase().startsWith(termNorm) ||
      firstName.includes(termNorm) ||
      lastName.includes(termNorm) ||
      fullName.includes(termNorm) ||
      fullNameReverse.includes(termNorm)
    );
  });
}
