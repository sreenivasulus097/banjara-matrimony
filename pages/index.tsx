import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Banjara - Matrimony">
        <SignUp />
      </Layout>
    </>
  );
}
