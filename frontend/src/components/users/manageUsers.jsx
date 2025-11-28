import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../hooks/authContext';
import { toast } from 'react-toastify';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { getAllUsers, deleteUser } = useContext(AuthContext);

  const getIt = async () => {
    const AllUsers = await getAllUsers();
    setUsers(AllUsers);
  };

  useEffect(() => {
    getIt();
  }, [getAllUsers]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(id);
      getIt();
      toast.success('User deleted successfully');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter(user =>
    user.userName?.toLowerCase().includes(searchTerm) ||
    user.email?.toLowerCase().includes(searchTerm) ||
    user.role?.toLowerCase().includes(searchTerm)
  );

  if (!users) {
    return <p>No users found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f172a] to-gray-900 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 p-6 md:p-10">

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                Manage <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Users</span>
              </h1>
              <p className="text-gray-400 text-lg">View and manage all user accounts</p>
            </div>
            <button
              className="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-gray-900 font-black rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:shadow-[0_0_50px_rgba(163,230,53,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              + New User
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-secondary/50 transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-secondary/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/5 group-hover:to-primary/5 transition-all duration-500 rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar and Name */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full flex items-center justify-center text-2xl font-black text-white border-2 border-secondary/20 group-hover:scale-110 transition-transform duration-300">
                    {user.userName?.[0]?.toUpperCase() || '?'}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                      {user.userName}
                    </h3>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 rounded-full text-xs font-black ${user.role === 'manager'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : user.role === 'participant'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                    }`}>
                    {user.role?.toUpperCase() || 'USER'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-all">
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 text-sm font-bold rounded-xl transition-all"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No users found</p>
          </div>
        )}
      </div>
    </div>
  );
}
