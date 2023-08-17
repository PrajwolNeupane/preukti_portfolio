function NavBar() {
  return (
    <div className="flex w-[100%] items-center justify-center gap-[100px] bg-[rgb(254,243,254,0.05)] py-5 fixed top-0 z-[5]">
      <h2 className="font-r text-sm text-primary-700">About</h2>
      <h2 className="font-r text-sm text-primary-700">Skills</h2>
      <h2 className="font-r text-sm text-light-500">Designs</h2>
      <h2 className="font-r text-sm text-light-500">Contact</h2>
    </div>
  );
}

export default NavBar;
 