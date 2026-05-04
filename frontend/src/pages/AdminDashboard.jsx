import { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [applications, setApplications] = useState([]);

    // Mock fetching applications for UI purposes
    useEffect(() => {
        setApplications([
            { _id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'MERN Stack', status: 'pending' },
            { _id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'UI/UX Designer', status: 'approved' },
        ]);
    }, []);

    const handleAction = async (id, action) => {
        // In real backend: update status and trigger email
        alert(`Application ${id} marked as ${action}`);
        setApplications(applications.map(app => 
            app._id === id ? { ...app, status: action } : app
        ));
    };

    const handleGenerateCertificate = async (id) => {
        alert(`Certificate Generated and Sent for Application ${id}!`);
    };

    return (
        <div className="min-h-screen bg-slate-50  py-12 px-4 flex flex-col items-center">
            <div className="max-w-5xl w-full mx-auto glass p-8 rounded-2xl shadow-xl border border-slate-200 ">
                <h2 className="text-3xl font-bold mb-6 text-slate-800 ">Admin Dashboard</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 ">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider ">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider ">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider ">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider ">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider ">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 ">
                            {applications.map((app) => (
                                <tr key={app._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 ">{app.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 ">{app.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 ">{app.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            app.status === 'approved' ? 'bg-green-100 text-green-800': 
                                            app.status === 'rejected' ? 'bg-red-100 text-red-800': 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                                        {app.status === 'pending' && (
                                            <>
                                                <button onClick={() => handleAction(app._id, 'approved')} className="text-green-600 hover:text-green-900 :text-green-400">Approve</button>
                                                <button onClick={() => handleAction(app._id, 'rejected')} className="text-red-600 hover:text-red-900 :text-red-400">Reject</button>
                                            </>
                                        )}
                                        {app.status === 'approved' && (
                                              <button onClick={() => handleGenerateCertificate(app._id)} className="text-blue-600 hover:text-blue-900 :text-blue-400">Issue Cert</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;