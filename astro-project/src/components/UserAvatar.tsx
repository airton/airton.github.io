import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar() {
  return (
    <Avatar className="w-[30px] h-[30px]">
      <a href="/">
        <AvatarImage
          src="https://github.com/airtonvancin.png"
          className="p-0 m-0 "
        />
      </a>
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  );
}
