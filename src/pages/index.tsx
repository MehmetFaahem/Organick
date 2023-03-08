import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Home from "../../components/Home";

export default function MainHome() {
  return (
    <Layout pageTitle="Organick">
      <Home />
    </Layout>
  );
}
