import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/profile.jpeg"
        alt="Profile picture of Abdul Rashid Khan"
        className="rounded-full mb-4"
        width={115}
        height={115}
      />
    </div>
  );
};

export default ProfileImage;
