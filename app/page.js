import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import Product from "@/components/product";
import Hero from "@/components/hero";
import About from "@/components/about";
import { strapi } from '@strapi/client';

export const dynamic = 'force-dynamic';

// const client = strapi({ baseURL: 'http://localhost:1337/api' });
const client = strapi({ baseURL: String(process.env.STRAPI_URL) });

const landingPage = client.single('landing-page');
console.log(landingPage);

const fetchData = async () => {
  try {
    const response = await landingPage.find(
      {
        populate : {
          Dinamic : {
            on: {
              "home.hero" : {
                populate : "*"
              },
              "home.about-us" : {
                populate : "*"
              },
              "home.product" : {
                populate : "*"
              }
            }
          }
        }
      }
    );
    return response.data.Dinamic;

  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};



export default async function Home() {

  const datas = await fetchData();
  return (
    <>
    {/* Hero */}

    {
      datas.map((items) => {
        switch (items.__component) {
          case "home.hero":
            return (
              <Hero data={items} key={items.__component}/>
            );
          case "home.about-us":
            return (
              <About data={items} key={items.__component}/>
            );
          case "home.product":
            return (
              <Product data={items} key={items.__component}/>
            );
          default:
            return null;
        }
      })
    }
    </>
  );
}
