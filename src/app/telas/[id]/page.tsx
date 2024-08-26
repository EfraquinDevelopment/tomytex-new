"use client";
import { useParams } from "next/navigation";
import React from "react";

const TelaDetail = () => {
  const { id } = useParams();

  return <div>TELA {id}</div>;
};

export default TelaDetail;
