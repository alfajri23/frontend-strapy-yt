import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { strapi } from '@strapi/client';

const client = strapi({ baseURL: 'http://localhost:1337/api' });
const product = client.collection('products');

const fetchData = async () => {
  try {
    const response = await product.find(
      {
        populate : "*"
      }
    );
    return response.data;

  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};


async function Product({data}) {
  
  const dataProducts = await fetchData();

  return (
    <>
    <section className="py-16 md:py-32 bg-sky-50 dark:bg-black">
        <div className="@container mx-auto max-w-5xl md:px-6 px-2">
          <div className="text-center">
              <p className="mt-2 text-neutral-700">{data.Title}</p>
              <h2 className="text-balance text-3xl">{data.Subtitle}</h2>


              <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-10">
                {
                  dataProducts.map((item) => (
                    <div key={item.id} className='flex justify-center'>
                      <div className='flex flex-col md:rounded-lg rounded-sm bg-white shadow-sm'>
                        <Image
                          // src={'http://localhost:1337' + item.image.url}
                          src={process.env.STRAPI_MEDIA + item.image.url}
                          height={400}
                          width={400}
                          alt={item.nama}
                          className='w-full md:rounded-t-lg rounded-t-sm '
                        />
                        <div className='md:px-5 px-2 pt-1 pb-3 text-start'>
                          <p className='md:text-base text-sm font-medium text-black my-2'>
                            <Link href={`/basic-2/product/${item.id}`} >
                              {item.nama}
                            </Link>
                          </p>
                          <p className='md:text-sm text-xs font-light leading-none text-muted-foreground'>{item.deskripsi}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
                
              </div>
          </div>
        </div>
    </section>

    </>
  )
}

export default Product