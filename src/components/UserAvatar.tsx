export function UserAvatar() {
  return (
    <div>
      <a
        href="/"
        className="w-[30px] h-[30px] rounded-full block overflow-hidden"
      >
        <img
          src="/assets/images/profile-avatar.avif"
          className="p-0 m-0"
          alt="Airton Vancin Junior"
          width={30}
          height={30}
        />
      </a>
    </div>
  );
}
