"use client";

import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Card from "./Card";
import Tool from "./Tool";
import Book from "./Book";

type BookmarkItem = {
  items: string;
};
type BookmarkProps = {
  bookmarks: BookmarkItem[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TabContainer({ bookmarks }: BookmarkProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalData, setModalData] = useState<any>({}); // todo

  useEffect(() => {
    dynamicColor();
    setModalData({});
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0;
  }, [selectedIndex]);

  const dynamicColor = () => {
    // todo
    if (selectedIndex !== 5) {
      return "bg-gradient-to-r from-green-600 via-green-500 to-green-800";
    }
  };

  const generalData = bookmarks[0].items;
  const frameworksData = bookmarks[1].items;
  const advancedData = bookmarks[2].items;
  const basicsData = bookmarks[3].items;
  const toolsData = bookmarks[4].items;
  const booksData = bookmarks[5].items;

  let [categories] = useState({
    General: generalData || [],
    Basics: basicsData || [],
    Advanced: advancedData || [],
    Tools: toolsData || [],
    Books: booksData || [],
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
      case "Books":
        return booksData?.length;
    }
  };

  const dynamicClassName = (idx: number) => {
    switch (idx) {
      case 0:
      case 3:
        return "md:grid-cols-3";
      case 1:
      case 2:
      case 4:
        return "md:grid-cols-2";
    }
  };

  return (
    <div className="w-full max-w-6xl px-2 py-2 sm:px-0">
      <Tab.Group
        onChange={(index) => {
          setSelectedIndex(index);
        }}
      >
        <Tab.List
          className={`flex space-x-1 overflow-hidden rounded-xl my-8 p-2 transition-all ${dynamicColor()}`}
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
              <ul className={`grid grid-cols-1 ${dynamicClassName(idx)} gap-5`}>
                {items.length > 0 ? (
                  <>
                    {items?.map((item: any, k: number) => (
                      <>
                        {idx !== 3 && idx !== 4 ? (
                          <Card idx={idx} key={k} data={item} />
                        ) : idx === 3 ? (
                          <Tool idx={idx} key={k} data={item} />
                        ) : (
                          <Book idx={idx} key={k} data={item} />
                        )}
                      </>
                    ))}
                  </>
                ) : null}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
