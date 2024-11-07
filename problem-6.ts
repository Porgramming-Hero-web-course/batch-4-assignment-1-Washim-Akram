export {};
interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  profile: Profile,
  updates: Partial<Profile>
): Profile => {
  const updatedProfile = { ...profile, ...updates };
  return updatedProfile;
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
