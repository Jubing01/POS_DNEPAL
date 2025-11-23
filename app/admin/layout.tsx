//@ts-nocheck

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="flex w-full h-16 items-center justify-between px-12">
        <div className="text-xl font-bold">
          POS <span className="">DNEPAL</span>
        </div>
        <div className="flex gap-8">
          <div>Settings</div>
          <div>User Profile</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
