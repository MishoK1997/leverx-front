import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  useGetUserDetailQuery,
  useUpdateUserMutation,
} from "../store/api/usersApi";
import { Employee } from "../types";
import { canEdit, formatDateForInput } from "../utils/commonUtils";
import { UserProfileHeader } from "../components/details/UserProfileHeader";
import { DetailRow } from "../components/details/DetailRow";
import {
  DepartmentIcon,
  BuildingIcon,
  RoomIcon,
  DeskIcon,
  DateIcon,
  ManagerIcon,
  PhoneIcon,
  EmailIcon,
  SkypeIcon,
  CNumIcon,
  WorldIcon,
  VisaIcon,
} from "./icons/ListIcons";

import "../scss/userDetailEdit.scss";
import "../scss/user-detail.scss";

/**
 * @useParams catches id from the url
 * @useGetUserDetailQuery created RTK hook that automatically checks the cache if user exist otherwise fetches
 * @useUpdateUserMutation RTK hook that allows us to update user details
 * @isSaving passed to buttons to disable them during saving
 *
 *
 */

export default function UserDetails() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const { id } = useParams<{ id: string }>();

  const { data: initialUser, isLoading: isFetching } = useGetUserDetailQuery(
    id!,
    { skip: !id },
  );

  const [updateUser, { isLoading: isSaving }] = useUpdateUserMutation();

  const currentUser = useSelector((state: RootState) => state.auth.user);

  //Local states used for form editing
  const [formData, setFormData] = useState<Employee | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  //Sync form data when data arrives from server
  useEffect(() => {
    if (initialUser) {
      setFormData(initialUser);
    }
  }, [initialUser]);

  //Input handlers
  const handleInput = useCallback((key: string, val: string) => {
    setFormData((prev) => (prev ? { ...prev, [key]: val } : null));
  }, []);

  const handleDateInput = useCallback((key: string, val: string) => {
    const [year, month, day] = val.split("-")
    setFormData((prev) => (prev ? { ...prev, [key]: {
      year: year,
      month: month,
      day: day
    } } : null));
  }, []);

  const handleSave = async () => {
    if (!formData || !id) return;
    try {
      await updateUser({ id, data: formData }).unwrap();
      setIsEditing(false);
    } catch (e) {
      console.error("Save failed", e);
    }
  };
  //Reseting state
  const handleCancel = () => {
    if (initialUser) setFormData(initialUser);
    setIsEditing(false);
  };

  if (isFetching || !formData || !initialUser) {
    return <div id="progress-detail">Lever<span id="x">X</span></div>;
  }

  return (
    <div id="user-detail-container">
      <UserProfileHeader
        user={formData}
        originalUser={initialUser}
        isEditing={isEditing}
        canEdit={canEdit(currentUser, initialUser)}
        onEditToggle={() => setIsEditing(true)}
        onSave={handleSave}
        onCancel={handleCancel}
        onNameChange={handleInput}
        isLoading={isSaving}
      />

      <div id="user-details">
        {/* General info section ------------------------ */}
        <h2>GENERAL INFO</h2>
        <hr />
        <ul className="user-meta">
          <DetailRow
            label="Department"
            icon={<DepartmentIcon />}
            value={formData.department}
            isEditing={isEditing}
            editKey="department"
            onChange={handleInput}
          />
          <DetailRow
            label="Building"
            icon={<BuildingIcon />}
            value={formData.building}
            isEditing={isEditing}
            editKey="building"
            onChange={handleInput}
          />
          <DetailRow
            label="Room"
            icon={<RoomIcon />}
            value={formData.room}
            isEditing={isEditing}
            editKey="room"
            onChange={handleInput}
          />
          <DetailRow
            label="Desk Number"
            icon={<DeskIcon />}
            value={formData.desk_number}
            type="number"
            isEditing={isEditing}
            editKey="desk_number"
            onChange={handleInput}
          />
          <DetailRow
            label="Date of Birth"
            icon={<DateIcon />}
            value={formatDateForInput(formData.date_birth)}
            type="date"
            isEditing={isEditing}
            editKey="date_birth"
            onChange={handleDateInput}
          />
          <DetailRow
            label="Manager"
            icon={<ManagerIcon />}
            value={`${formData.manager?.first_name || ""} ${formData.manager?.last_name || ""}`}
            href={formData.manager?.id ? `/portal/users-details/${formData.manager.id}` : undefined}
            isEditing={false}
          />
        </ul>

        {/* Contact section ----------------------- */}
        <h2>CONTACTS</h2>
        <hr />
        <ul className="user-meta">
          <DetailRow
            label="Mobile phone"
            icon={<PhoneIcon />}
            value={formData.phone}
            href={`tel:${formData.phone}`}
            isEditing={isEditing}
            editKey="phone"
            onChange={handleInput}
          />
          <DetailRow
            label="Email"
            icon={<EmailIcon />}
            value={formData.email}
            href={`mailto:${formData.email}`}
            isEditing={isEditing}
            editKey="email"
            onChange={handleInput}
          />
          <DetailRow
            label="Skype"
            icon={<SkypeIcon />}
            value={formData.skype}
            isEditing={isEditing}
            editKey="skype"
            onChange={handleInput}
          />
          <DetailRow
            label="C-Number"
            icon={<CNumIcon />}
            value={formData.cnumber}
            isEditing={isEditing}
            editKey="cnumber"
            onChange={handleInput}
          />
        </ul>

        {/* Travel info section ---------------- */}
        <h2>TRAVEL INFO</h2>
        <hr />
        <ul className="user-meta">
          <DetailRow
            label="Citizenship"
            icon={<WorldIcon />}
            value={formData.citizenship}
            isEditing={isEditing}
            editKey="citizenship"
            onChange={handleInput}
          />
          <DetailRow
            label="Visa Type"
            icon={<VisaIcon />}
            value={formData.visa?.[0]?.type}
            isEditing={false}
          />
          <DetailRow
            label="Visa Period"
            icon={<DateIcon />}
            value={(() => {
              // condotionally return correct visa period or N/A
              const start = formData.visa[0]?.start_date;
              const end = formData.visa[0]?.end_date;
          
              if (!start || !end || String(start) === "N/A" || String(end) === "N/A") {
                return "N/A";
              }
          
              return `${new Date(start).toLocaleDateString()} - ${new Date(end).toLocaleDateString()}`;
            })()}            isEditing={false}
          />
        </ul>
      </div>
    </div>
  );
}
