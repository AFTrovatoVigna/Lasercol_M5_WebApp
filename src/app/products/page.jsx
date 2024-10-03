"use client";

import FiltroProductos from "@/components/Filtro/filtro";
import ProductsCards from "@/components/ProductsCards/ProductsCards";
import { useEffect, useState } from "react";
import Link from "next/link";

function Product() {
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Access the API URL here
    const APIURL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${APIURL}/products`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();

                setProducts(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [APIURL]); // Add APIURL as a dependency

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div>
            <h1 className="text-center text-black mt-36 lg:text-2xl">Compra nuestros productos</h1>
            </div>
            <section className="flex flex-col items-center space-y-4 mt-7 lg:mb-20 lg:flex-row lg:justify-around lg:space-x-4 lg:space-y-0 lg:p-4 lg:mt-12">
          
            <Link href="/llaveros" className="relative flex flex-col items-center group">
                <div className="relative w-[280px] h-[240px] lg:w-[240px] lg:h-[240px]">
                    <img
                        src="/assets/llavero1.jpg"
                        className="w-full h-full border-black lg:rounded-full transition-transform duration-100 hover:scale-105"
                        alt="foto llaveros"
                    />
                     <span className="absolute inset-0 flex items-center justify-center bg-pink-300 lg:rounded-full text-black text-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:text-2xl bg-opacity-55 ">
                        LLAVEROS
                    </span>
                </div>
            </Link>

            <Link href="/ManillaId" className="relative flex flex-col items-center group">
                <div className="relative w-[280px] h-[240px] lg:w-[240px] lg:h-[240px]">
                    <img
                        src="/assets/manilla1.jpg"
                        className="w-full h-full border-black lg:rounded-full transition-transform duration-100 hover:scale-105"
                        alt="foto manillas"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-pink-300 lg:rounded-full text-black text-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:text-2xl bg-opacity-55">
                        MANILLAS ID
                    </span>
                </div>
            </Link>

            <Link href="/PlacaMascotas" className="relative flex flex-col items-center group">
                <div className="relative w-[280px] h-[240px] lg:w-[240px] lg:h-[240px]">
                    <img
                        src="/assets/placamascota1.jpg"
                        className="w-full h-full border-black lg:rounded-full transition-transform duration-100 hover:scale-105"
                        alt="foto placas mascotas"
                    />
                    <span className=" absolute inset-0 flex items-center justify-center bg-pink-300 lg:rounded-full text-black text-[18px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:text-2xl text-center   bg-opacity-55">
                        PLACAS PARA MASCOTAS
                    </span>
                </div>
            </Link>

            <Link href="/collar" className="relative flex flex-col items-center group">
                <div className="relative w-[280px] h-[240px] lg:w-[240px] lg:h-[240px]">
                    <img
                        src="/assets/collar1.jpeg"
                        className="w-full h-full border-black lg:rounded-full transition-transform duration-100 hover:scale-105"
                        alt="foto collares"
                    />
                     <span className="absolute inset-0 flex items-center justify-center bg-pink-300 lg:rounded-full text-black text-[18px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:text-2xl bg-opacity-55 ">
                        COLLARES
                    </span>
                </div>
            </Link>

        </section>
            <FiltroProductos productos={productos} />
        </div>
    );
}

export default Product;
