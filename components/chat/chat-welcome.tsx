import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
};

export const ChatWelcome = ({
  name,
  type
}: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-violet-500 dark:bg-violet-700 flex items-center justify-center">
          <Hash className="h-12 w-12 text-white" />
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold">
        {type === "channel" ? "#" : ""}{name}
      </p>
      <p className="text-violet-600 dark:text-violet-400 text-sm">
        {type === "channel"
          ? `This is the start of the #${name} box.`
          : `This is the start of your conversation with ${name}`
        }
      </p>
    </div>
  )
}