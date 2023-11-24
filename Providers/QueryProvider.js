"use client";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { UPDATE_INSTRUMENT_DATA } from "@/redux/instrumentReducer/instrumentReducer";
import { UPDATE_APN_DATA } from "@/redux/apnReducer/apnReducer";
import { UPDATE_IMAGE_DATA } from "@/redux/imageReducer/imageReducer";

const queryClient = new QueryClient();

export default function QueryProvider({ children }) {
  const dispatch = useDispatch()
  const pathname = usePathname()

  useEffect(() => {
    //clear instrument data
    dispatch({ type: UPDATE_INSTRUMENT_DATA, payload: null })

    //clear apn data
    dispatch({ type: UPDATE_APN_DATA, payload: null })

    //clear Image data
    dispatch({ type: UPDATE_IMAGE_DATA, payload: null })
  }, [pathname])

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <SessionProvider>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}
