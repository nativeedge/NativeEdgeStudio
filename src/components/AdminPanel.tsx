import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Mail, Trash2, Eye, Clock, User, Building, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  timestamp: any;
  status: 'read' | 'unread';
}

const AdminPanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData: Message[] = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({
          id: doc.id,
          ...doc.data()
        } as Message);
      });
      setMessages(messagesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (messageId: string) => {
    try {
      await updateDoc(doc(db, 'messages', messageId), {
        status: 'read'
      });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const deleteMessage = async (messageId: string) => {
    try {
      await deleteDoc(doc(db, 'messages', messageId));
      setSelectedMessage(null);
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Just now';
    return timestamp.toDate().toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-600 mt-2">Manage contact messages</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">
                Messages ({messages.length})
              </h2>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (message.status === 'unread') {
                      markAsRead(message.id);
                    }
                  }}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                    message.status === 'unread' ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  } ${selectedMessage?.id === message.id ? 'bg-blue-100' : ''}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{message.name}</h3>
                      <p className="text-sm text-gray-600">{message.email}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(message.timestamp)}
                      </p>
                    </div>
                    {message.status === 'unread' && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Details */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Message Details</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => deleteMessage(selectedMessage.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{selectedMessage.name}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{selectedMessage.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Building className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Company</p>
                          <p className="font-medium">{selectedMessage.company || 'Not provided'}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">Service</p>
                          <p className="font-medium">{selectedMessage.service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Received</p>
                      <p className="font-medium">{formatDate(selectedMessage.timestamp)}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Message</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select a message to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;