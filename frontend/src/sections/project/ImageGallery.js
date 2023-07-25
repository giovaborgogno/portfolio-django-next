import { Tab } from '@headlessui/react'
import Image from 'next/image'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ImageGallery = ({ data }) => {

    const photos = [
        {url: data?.photo_1 ?? ''},
        {url: data?.photo_2 ?? ''},
        {url: data?.photo_3 ?? ''}
    ]

    return (
        <>
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
               
                <div className=" mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                    <Tab.List className="grid grid-cols-4 gap-6">
                        {data && data !== null &&
                        photos.map((photo, id)=>(
                            <Tab
                                key={id}
                                className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                            >
                                {({ selected }) => (
                                    <>
                                        <span className="sr-only">{photo.url}</span>
                                        <span className="absolute inset-0 rounded-md overflow-hidden">
                                            {/* <img src={product.images[0].src} alt="" className="w-full h-full object-center object-cover" /> */}
                                            <Image src={`${photo.url}`} alt="" width={1000} height={1000} className="w-full h-full object-center object-cover" />
                                        </span>
                                        <span
                                            className={classNames(
                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </Tab>
                        ))

                        }
                    </Tab.List>
                </div>

                <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                    {data && data !== null &&
                    photos.map((photo, id) => (
                        <Tab.Panel key={id}>
                            <Image
                                // src={product.images[0].src}
                                src={`${photo.url}`}
                                alt=""
                                width={1000}
                                height={1000}
                                className="w-full h-full object-center object-cover sm:rounded-lg"
                            />
                        </Tab.Panel>
                    ))
                    }
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}

export default ImageGallery