import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/profile.png"
        alt="Profile picture of Abdul Rashid Khan"
        className="rounded-full mb-4"
        width={120}
        height={120}
      />
    </div>
  );
};

export default ProfileImage;
