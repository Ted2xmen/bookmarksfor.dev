import React from "react";

type TagProps = {
  tag: string | any;
};

type TagsProps = {
  tags: TagProps[];
};

const Tags = ({ tags }: TagsProps) => {
  const dynamicTagColor = (tag: string) => {
    switch (tag) {
      case "react":
        return "bg-gradient-to-r from-fuchsia-200 via-fuchsia-100 to-fuchsia-400 text-black";
      case "javascript":
        return "bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-400 text-black";
      case "typescript":
        return "bg-gradient-to-r from-indigo-200 via-indigo-100 to-indigo-400 text-black";
      case "NextJS":
      case "performance":
        return "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 text-black";
      case "analytics":
      case "seo":
        return "bg-gradient-to-r from-stone-100 via-stone-100 to-stone-300 text-black";
      case "accessibility":
        return "bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-400 text-black";
      case "clean-code":
        return "bg-gradient-to-r from-rose-200 via-rose-100 to-rose-400 text-black";
      case "state":
      case "design":
        return "bg-gradient-to-r from-red-200 via-red-100 to-red-300 text-black";
      case "devtools":
        return "bg-gradient-to-l from-lime-300 via-lime-200 to-lime-500 text-black";
      default:
        return "border border-slate-500";
    }
  };

  const Tag = ({ tag }: TagProps) => {
    return (
      <span className={`${dynamicTagColor(tag)} text-xs p-2 rounded-md`}>
        {tag}
      </span>
    );
  };

  return (
    <div className="flex items-center gap-2">
      {tags.slice(0,3).map((tag: any, key: number) => {
        return <Tag tag={tag} key={key} />;
      })}
    </div>
  );
};

export default Tags;
