"use client";

import { useState, useEffect } from "react";

interface ProfileImageProps {
  src: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  
  // Default avatar as a data URL (light gray circle with person icon)
  const defaultAvatar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIxMDAiIGZpbGw9IiNFNUU3RUIiLz48cGF0aCBkPSJNMTAwIDEwNUM4NS4wMzggMTA1IDczIDkyLjk2MiA3MyA3OEM3MyA2My4wMzggODUuMDM4IDUxIDEwMCA1MUMxMTQuOTYyIDUxIDEyNyA2My4wMzggMTI3IDc4QzEyNyA5Mi45NjIgMTE0Ljk2MiAxMDUgMTAwIDEwNVpNMTQ3IDE0NUMxNDcgMTM1LjA1OSAxMzkuMjgxIDEyNi4zOTUgMTI4LjE5MSAxMjEuNjNDMTIwLjA4IDEyOC4yMjkgMTEwLjM5NiAxMzIgMTAwIDEzMkM4OS42MDQzIDEzMiA3OS45MTk5IDEyOC4yMjkgNzEuODA5MyAxMjEuNjNDNjAuNzE4NyAxMjYuMzk1IDUzIDEzNS4wNTkgNTMgMTQ1VjE0OUgxNDdWMTQ1WiIgZmlsbD0iIzk0QTNCOCIvPjwvc3ZnPg==";

  useEffect(() => {
    if (src && src !== defaultAvatar) {
      setImageSrc(src);
      setImageError(false);
    }
  }, [src]);

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
      <img
        src={imageError || !imageSrc || imageSrc === defaultAvatar ? defaultAvatar : imageSrc}
        alt="Profile picture"
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default ProfileImage;
