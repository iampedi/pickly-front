// src/pages/ContentsPage.tsx
import { API_URL } from "@/config/api";
import { contentTypes } from "@/constants/content-types";
import { cn } from "@/lib/utils";
import type { Content } from "@/types/content";
import { Fragment, useEffect, useRef, useState } from "react";
// UI Imports
import TooltipWrapper from "@/components/theme/TooltipWrapper";
import { CrownIcon, DotIcon, ExternalLinkIcon, TagIcon } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SubmitButton } from "@/components/SubmitButton";

export default function ContentsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [Contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 1.0,
      },
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const getContentTypeMeta = (value: string) => {
    return contentTypes.find((c) => c.value === value);
  };

  useEffect(() => {
    const fetchContents = async (): Promise<void> => {
      try {
        const response = await fetch(`${API_URL}/contents`);
        const data: Content[] = await response.json();
        setContents(data);
      } catch (error) {
        console.error("Error fetching contents:", error);
      }
    };

    fetchContents();
  }, []);

  const usedTypes = new Set<string>(Contents.map((c) => c.type));

  return (
    <div className="relative">
      <div ref={ref} className="absolute -top-8 right-0 left-0" />
      <div
        className={cn(
          "sticky top-0 mx-auto flex w-full items-center",
          isStuck ? "justify-between bg-white shadow" : "justify-center",
        )}
      >
        <div
          className={cn(
            "flex items-center bg-white px-6 duration-300",
            isStuck
              ? "mt-0 w-full justify-between"
              : "-mt-8 max-w-4xl rounded-full shadow px-8",
          )}
        >
          {isStuck && <Logo />}

          <div className="flex h-16 items-center gap-10">
            {contentTypes
              .filter((type) => usedTypes.has(type.value))
              .map((type) => {
                const Icon = type.icon;

                return (
                  <div key={type.value} className="flex items-center gap-2.5 hover:text-rose-600">
                    <Icon size={20} /> {type.label}
                  </div>
                );
              })}
          </div>

          {isStuck && <SubmitButton />}
        </div>
      </div>

      <div className="-mt-8 bg-white py-22">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-6 flex items-center gap-2 px-6 text-2xl font-medium text-rose-600">
            <CrownIcon size={22} />
            Contents List
          </h1>

          <div className="grid gap-4">
            {Contents.map((content) => {
              const meta = getContentTypeMeta(content.type);
              const Icon = meta?.icon;

              return (
                <div
                  key={content.id}
                  className="group space-y-2 rounded-xl border border-white px-6 py-5 duration-300 hover:border-lime-300 hover:bg-lime-50/50"
                >
                  <h2 className="flex items-center gap-2.5 text-lg font-medium group-hover:text-lime-600">
                    {Icon && (
                      <TooltipWrapper tooltip={meta?.label}>
                        <Icon size={20} />
                      </TooltipWrapper>
                    )}
                    {content.title}
                    {content.link && (
                      <TooltipWrapper tooltip="Open Link">
                        <a href={content.link} target="_blank">
                          <ExternalLinkIcon
                            size={16}
                            className="text-white group-hover:text-gray-500 hover:text-black"
                          />
                        </a>
                      </TooltipWrapper>
                    )}
                  </h2>

                  {content.tags?.length > 0 && (
                    <div className="flex items-center gap-2.5 capitalize">
                      <TagIcon size={16} className="text-gray-600" />
                      <div className="flex">
                        {content.tags.map((tag, index) => (
                          <Fragment key={tag}>
                            <span className="flex items-center gap-1 text-sm">
                              {tag}
                            </span>

                            {index < content.tags.length - 1 && (
                              <DotIcon size={18} className="text-gray-300" />
                            )}
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {content.description && (
                    <p className="text-gray-600">{content.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
