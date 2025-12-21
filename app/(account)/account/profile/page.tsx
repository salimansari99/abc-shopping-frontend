"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { profileSchema, passwordSchema } from "./schema";

type ProfileForm = {
  firstName: string;
  lastName: string;
  phone?: string;
};

type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ProfilePage() {
  /* ---------------- PROFILE ---------------- */
  const profileForm = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "Salim",
      lastName: "Ansari",
      phone: "+91 9876543210",
    },
  });

  const onSaveProfile = async (data: ProfileForm) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Profile updated");
  };

  /* ---------------- PASSWORD ---------------- */
  const passwordForm = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
  });

  const onChangePassword = async (data: PasswordForm) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Password changed");
    passwordForm.reset();
  };

  /* ---------------- AVATAR ---------------- */
  const [avatar, setAvatar] = useState("/images/avatar.png");

  const handleAvatarUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setAvatar(url);
    toast.success("Avatar updated");
  };

  return (
    <div className="max-w-xl space-y-10">
      <h1 className="text-2xl font-bold">Profile</h1>

      {/* -------- Avatar -------- */}
      <div className="flex items-center gap-4">
        <img src={avatar} className="h-20 w-20 rounded-full object-cover" />
        <label className="cursor-pointer text-sm text-blue-600">
          Change Avatar
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) =>
              e.target.files && handleAvatarUpload(e.target.files[0])
            }
          />
        </label>
      </div>

      {/* -------- Profile Form -------- */}
      <form
        onSubmit={profileForm.handleSubmit(onSaveProfile)}
        className="space-y-4"
      >
        <input
          {...profileForm.register("firstName")}
          placeholder="First name"
          className="w-full rounded border px-3 py-2"
        />
        <input
          {...profileForm.register("lastName")}
          placeholder="Last name"
          className="w-full rounded border px-3 py-2"
        />
        <input
          {...profileForm.register("phone")}
          placeholder="Phone"
          className="w-full rounded border px-3 py-2"
        />

        <button className="rounded bg-black px-4 py-2 text-white">
          Save Profile
        </button>
      </form>

      {/* -------- Change Password -------- */}
      <form
        onSubmit={passwordForm.handleSubmit(onChangePassword)}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold">Change Password</h2>

        <input
          type="password"
          {...passwordForm.register("currentPassword")}
          placeholder="Current password"
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="password"
          {...passwordForm.register("newPassword")}
          placeholder="New password"
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="password"
          {...passwordForm.register("confirmPassword")}
          placeholder="Confirm password"
          className="w-full rounded border px-3 py-2"
        />

        <button className="rounded bg-black px-4 py-2 text-white">
          Change Password
        </button>
      </form>
    </div>
  );
}
