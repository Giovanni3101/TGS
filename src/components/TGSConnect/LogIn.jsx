import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    User,
    ChevronLeft,
    MessageCircle,
    Key
} from 'lucide-react';

const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3
};

const LoginSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentView, setCurrentView] = useState('main');
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        verificationCode: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [codeSent, setCodeSent] = useState(false);

    // Redirect after login
    const from = location.state?.from?.pathname || '/user-dashboard';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (currentView === 'main') {
            if (!isLogin && !formData.name.trim()) {
                newErrors.name = 'Full name is required';
            }

            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }

            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            }
        } else if (currentView === 'phone') {
            if (!formData.phone.trim()) {
                newErrors.phone = 'Phone number is required';
            }

            if (codeSent && !formData.verificationCode.trim()) {
                newErrors.verificationCode = 'Verification code is required';
            }
        } else if (currentView === 'forgot') {
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleEmailAuth = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({ submit: 'Authentication functionality not implemented' });
        setIsLoading(false);
    };

    const handleGoogleAuth = async () => {
        setIsLoading(true);
        setErrors({ submit: 'Google authentication not implemented' });
        setIsLoading(false);
    };

    const handlePhoneSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({ submit: 'Phone authentication not implemented' });
        setIsLoading(false);
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setErrors({ submit: 'Forgot password functionality not implemented' });
        setIsLoading(false);
    };

    const handleBack = () => {
        if (currentView !== 'main') {
            setCurrentView('main');
            setCodeSent(false);
            setFormData(prev => ({ ...prev, verificationCode: '' }));
        } else {
            navigate(-1);
        }
    };

    const renderMainView = () => (
        <motion.div
            key="main-view"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <form onSubmit={handleEmailAuth} className="space-y-4">
                {!isLogin && (
                    <div>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Full name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>
                )}

                <div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                <div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${errors.password ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                    )}
                </div>

                {isLogin && (
                    <div className="text-right">
                        <button
                            type="button"
                            onClick={() => setCurrentView('forgot')}
                            className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>
                )}

                {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${isLoading
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            {isLogin ? 'Signing in...' : 'Signing up...'}
                        </div>
                    ) : isLogin ? (
                        'Sign In'
                    ) : (
                        'Sign Up'
                    )}
                </button>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>

            <div className="space-y-3">
                <button
                    onClick={handleGoogleAuth}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                </button>

                <button
                    onClick={() => setCurrentView('phone')}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                    <Phone size={16} />
                    Phone number
                </button>
            </div>

            <div className="text-center mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-1 text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                        {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                </p>

                <p className="text-[10px] text-gray-500 mt-3">
                    By signing in, you agree to our Terms of Use and Privacy Policy.
                </p>
            </div>
        </motion.div>
    );

    const renderPhoneView = () => (
        <motion.div
            key="phone-view"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div className="text-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Phone className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold">Phone Login</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        {codeSent
                            ? "Enter the code received by SMS"
                            : "Enter your phone number to receive a verification code"
                        }
                    </p>
                </div>

                {!codeSent ? (
                    <div>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="relative">
                            <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                name="verificationCode"
                                placeholder="Verification code"
                                value={formData.verificationCode}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${errors.verificationCode ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                        </div>
                        {errors.verificationCode && (
                            <p className="text-red-500 text-xs mt-1">{errors.verificationCode}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-2">
                            Didn't receive the code? <button type="button" className="text-blue-600">Resend</button>
                        </p>
                    </div>
                )}

                {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${isLoading
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            {codeSent ? 'Verifying...' : 'Sending code'}
                        </div>
                    ) : codeSent ? (
                        'Verify code'
                    ) : (
                        'Send code'
                    )}
                </button>
            </form>
        </motion.div>
    );

    const renderForgotView = () => (
        <motion.div
            key="forgot-view"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="text-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Key className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold">Forgot Password</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Enter your email to receive a reset link
                    </p>
                </div>

                <div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${isLoading
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                        </div>
                    ) : (
                        'Send reset link'
                    )}
                </button>
            </form>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative">

                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 text-center relative">
                    <button
                        onClick={handleBack}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-100 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <h2 className="text-xl font-bold">
                        {currentView === 'phone'
                            ? 'Phone Login'
                            : currentView === 'forgot'
                                ? 'Forgot Password'
                                : isLogin ? 'Sign In' : 'Create Account'
                        }
                    </h2>
                    <p className="text-sm opacity-90 mt-1">
                        {currentView === 'main' && (isLogin ? 'Welcome back!' : 'Join us today!')}
                    </p>
                </div>

                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {currentView === 'main' && renderMainView()}
                        {currentView === 'phone' && renderPhoneView()}
                        {currentView === 'forgot' && renderForgotView()}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default LoginSignIn;