import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Package2, CreditCard, MapPin } from 'lucide-react';
import { CartItem } from '../cart/CartProvider';
import { UserDetails } from '@/utils/userDetailsStorage';

interface PaymentLoadingScreenProps {
  cartItems?: CartItem[];
  userDetails?: UserDetails;
  total?: number;
  shipping?: number;
  finalTotal?: number;
}

const PaymentLoadingScreen = ({ 
  cartItems = [], 
  userDetails,
  total = 0,
  shipping = 0,
  finalTotal = 0
}: PaymentLoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div className="w-full max-w-md p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-6 shadow-xl"
        >
          <h2 className="text-xl font-semibold text-[#1A1F2C] mb-4 flex items-center gap-2">
            <Package2 className="w-5 h-5" />
            Aperçu de la commande
          </h2>
          
          {/* Order Items */}
          <div className="space-y-3 mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1A1F2C]">{item.name}</p>
                  <p className="text-xs text-gray-500">Quantité: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium text-[#1A1F2C]">
                  {(item.price * item.quantity).toFixed(2)} TND
                </p>
              </div>
            ))}
          </div>

          {/* Delivery Details */}
          {userDetails && (
            <div className="border-t border-gray-100 pt-4 mb-4">
              <h3 className="text-sm font-medium text-[#1A1F2C] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Adresse de livraison
              </h3>
              <p className="text-sm text-gray-600">
                {userDetails.firstName} {userDetails.lastName}<br />
                {userDetails.address}<br />
                {userDetails.zipCode} {userDetails.country}
              </p>
            </div>
          )}

          {/* Order Summary */}
          <div className="border-t border-gray-100 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Sous-total</span>
              <span className="font-medium">{total.toFixed(2)} TND</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Livraison</span>
              <span className="font-medium">
                {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} TND`}
              </span>
            </div>
            <div className="flex justify-between text-base font-medium pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>{finalTotal.toFixed(2)} TND</span>
            </div>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <div className="relative mt-8 text-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600/30 to-red-900/30 blur-xl" />
          <motion.div 
            className="relative backdrop-blur-md rounded-full p-8 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Loader2 className="w-12 h-12 text-white animate-spin" />
          </motion.div>
          <motion.p 
            className="text-white text-xl font-light mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Préparation du paiement sécurisé...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentLoadingScreen;