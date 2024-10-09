import FabricFeatures from "@/app/telas/[id]/components/fabric-features";
import HeroSectionDetail from "@/app/telas/[id]/components/hero-section-detail";
import RecommendedUses from "@/app/telas/[id]/components/recommended-uses";
import React from "react";

const TelaDetail = () => {

  return (
    <main className="isolate">
      <HeroSectionDetail />
      <FabricFeatures />
      <RecommendedUses />
    </main>
  );
};

export default TelaDetail;
