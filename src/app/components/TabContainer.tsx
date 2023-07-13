"use client";

import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Card from "./Card";
import Tool from "./Tool";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabContainer({ bookmarks }: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalData, setModalData] = useState<any>({}); // todo
  
  useEffect(() => {
    dynamicColor();
    setModalData({})
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }, [selectedIndex]);

  const dynamicColor = () => { // todo
    if (selectedIndex !== 4) {
      return "bg-gradient-to-r from-green-600 via-green-500 to-green-800";
    }
  };

  const generalData = bookmarks[0].items;
  const frameworksData = bookmarks[1].items;
  const advancedData = bookmarks[2].items;
  const basicsData = bookmarks[3].items;
  const toolsData = bookmarks[4].items;

  let [categories] = useState({
    General: generalData || [],
    Basics: basicsData || [],
    Advanced: advancedData || [],
    Tools: toolsData || [],
  });

  const dynamicLength = (category: string) => {
    switch (category) {
      case "General":
        return generalData?.length;
      case "Basics":
        return basicsData?.length;
      case "Advanced":
        return advancedData?.length;
      case "Frameworks":
        return frameworksData?.length;
      case "Tools":
        return toolsData?.length;
    }
  };

  const NoArticles = () => {
    return (
      <div className="flex flex-col items-center justify-around gap-5 py-5 text-slate-500">
        No articles or tools
        <svg
          className="w-10 h-10"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.4 2L26.9 14.5L14.4 2L2 14.4L14.5 26.9L2 39.4L14.4 51.8L26.9 39.3L39.4 51.8L51.8 39.4L39.3 26.9L51.8 14.4L39.4 2Z"
            stroke="currentColor"
            stroke-width="1.5882"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M39.4 2L26.9 14.5L14.4 2L2 14.4L14.5 26.9L2 39.4L14.4 51.8L26.9 39.3L39.4 51.8L51.8 39.4L39.3 26.9L51.8 14.4L39.4 2Z"
            stroke="currentColor"
            stroke-opacity="0.2"
            stroke-width="1.5882"
            stroke-miterlimit="10"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl px-2 py-2 sm:px-0">
      <Tab.Group
        onChange={(index) => {
          setSelectedIndex(index);
        }}
      >
        <Tab.List
          className={`flex space-x-1 rounded-xl my-8 p-2 transition-all ${dynamicColor()}`}
        >
          {Object.keys(categories).map((category: any) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-xs lg:text-sm font-medium leading-5 text-white",
                  "focus:outline-none focus:ring-1 text-black",
                  selected ? " bg-black " : "text-black"
                )
              }
            >
              <div className="flex justify-center items-baseline gap-1">
                {category}
                <span className="text-xs">
                  ({dynamicLength(category) || 0})
                </span>
              </div>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.values(categories).map((items: any, idx: number) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-slate-900 p-3 py-6 h-full",
                ""
              )}
            >
              <ul
                className={`grid grid-cols-1 ${idx === 3 ? "md:grid-cols-3" : idx === 0 ? "md:grid-cols-2" : "md:grid-cols-1" }  gap-5`}
              >
                {items.length > 0 ? (
                  <>
                    {items?.map((item: any, k: number) => (
                      <>
                        {idx !== 3 ? (
                          <div onClick={() => setModalData(item)}>
                            <Card idx={idx} key={k} data={item} />
                          </div>
                        ) : (
                          <Tool idx={idx} key={k} data={item} />
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  <NoArticles />
                )}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
