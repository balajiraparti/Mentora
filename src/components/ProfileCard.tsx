import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface Profile {
  name: string;
  email: string;
  role: string;
}

const ProfileCard: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("profiles")
        .select("name, email, role")
        .eq("id", user.id)
        .single();
      if (!error && data) {
        setProfile(data);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  if (loading) return null;
  if (!profile) return null;

  return (
    <div className="mx-auto my-8 w-full max-w-sm bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-primary-100">
      <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center text-3xl font-bold text-primary-700 mb-4">
        {profile.name ? profile.name[0].toUpperCase() : "?"}
      </div>
      <div className="text-xl font-semibold text-primary-700 mb-1">{profile.name}</div>
      <div className="text-gray-500 mb-1">{profile.email}</div>
      <div className="text-sm px-3 py-1 rounded-full bg-accent-100 text-accent-700 font-medium mt-2">
        {profile.role}
      </div>
    </div>
  );
};

export default ProfileCard; 