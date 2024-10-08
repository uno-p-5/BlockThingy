import { MouseEvent } from "react";

import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { PencilIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { api } from "../../../convex/_generated/api";
import { Doc } from "../../../convex/_generated/dataModel";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface GameCardProps {
  game: Doc<"project">;
}

export function GameCard({ game }: GameCardProps) {
  const deleteGame = useMutation(api.project.deleteProject);
  const router = useRouter();

  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    router.push(`/editor/${game._id}`);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    deleteGame({ projectId: game._id });
  };

  return (
    <Link
      href={`/editor/${game?._id}`}
      className="flex max-h-fit w-fit min-w-fit"
    >
      <div
        className={cn(
          "flex-center group relative h-40 w-80 min-w-80 snap-start flex-col space-y-1 overflow-hidden rounded-lg border-2 border-solid border-slate-950",
          "transition-colors hover:border-0 hover:ring-[3px] hover:ring-slate-950"
        )}
      >
        <Image
          src={`/images/games/img${Math.floor(Math.random() * 3) + 1}.png`}
          alt="game"
          width={100}
          height={100}
          className="h-full w-full object-cover blur-sm"
        />

        <div
          className={cn(
            "absolute bottom-0 mt-auto flex h-14 w-full flex-col items-center justify-center space-y-1 bg-slate-100 bg-opacity-90 px-2 py-1 opacity-0 transition-opacity",
            "group-hover:opacity-100"
          )}
        >
          <p className="mr-auto line-clamp-1 text-left text-lg font-semibold leading-tight">
            {game?.name}
          </p>
          <p className="mr-auto line-clamp-1 overflow-hidden text-ellipsis text-sm leading-tight">
            {game?.description}
          </p>
        </div>

        <div className="absolute right-2 top-0 space-x-2">
          <Button
            variant={"secondary"}
            className={cn(
              "pointer-events-none aspect-square min-h-0 min-w-0 p-2 py-1 opacity-0",
              "group-hover:pointer-events-auto group-hover:opacity-100"
            )}
            onClick={handleEdit}
          >
            <PencilIcon size={16} />
          </Button>
          <Button
            variant={"destructive"}
            className={cn(
              "pointer-events-none aspect-square min-h-0 min-w-0 p-2 py-1 opacity-0",
              "group-hover:pointer-events-auto group-hover:opacity-100"
            )}
            onClick={handleDelete}
          >
            <TrashIcon size={16} />
          </Button>
        </div>
      </div>
    </Link>
  );
}
