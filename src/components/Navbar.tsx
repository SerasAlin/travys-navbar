import React, { useState } from "react";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";
import { NavDataKey } from "@/global/types";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [selectedTab, setSelectedTab] = useState<NavDataKey>("Voyageurs");

  return (
    <NavContainer>
      <Link href="/" passHref>
        <Image
          style={{
            position: "absolute",
            top: "1rem",
          }}
          src="/we.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Link>
      <PrimaryNav onTabChange={setSelectedTab} />
      <SecondaryNav selectedTab={selectedTab} />
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media (max-width: 600px) {
    img {
      display: none;
    }
  }
`;
