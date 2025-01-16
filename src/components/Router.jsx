import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ProtectedRoute from '../context/ProtectedRoute';

import Home from "../views/HomePage";
import Catalog from '../views/Catalog';

import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';

import RegisterProduct from '../views/RegisterProduct';
import Reservations from '../views/ReservationsPage';

import RestaurantDetails from '../views/RestaurantDetails';

import ProfilePage from '../views/ProfilePage';

import Restaurante from '../views/Restaurante/DashboardRestaurante';
import PerfilRestaurante from '../views/Restaurante/PerfilRestaurante';
import RegistrarRestaurante from '../views/Restaurante/RegistrarRestaurante';


const Router = () => {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/catalogo' element={<Catalog />} />
                        <Route path="/restaurantes/:id" element={<RestaurantDetails />} />
                        <Route path='/registrar-producto' element={<RegisterProduct />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/reservas" element={<Reservations />} />
                        <Route path="/perfil" element={<ProfilePage />} />
                        <Route path="/dashboard/restaurante" element={<Restaurante />} />
                        <Route path="/dashboard/perfil-restaurante" element={<PerfilRestaurante />} />
                        <Route path="/nuevo-restaurante" element={<RegistrarRestaurante />} />
                        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminPage /></ProtectedRoute>} /> */}

                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Router;