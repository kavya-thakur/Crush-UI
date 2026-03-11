import { motion } from "framer-motion";

type Person = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

const people: Person[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
];

export default function AnimatedTooltip() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center">
        {people.map((person) => (
          <motion.div
            key={person.id}
            className="relative group -ml-3 first:ml-0"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Avatar */}
            <img
              src={person.image}
              alt={person.name}
              className="
                h-12 w-12 rounded-full
                border-2 border-white
                object-cover
                shadow-sm
              "
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="
                pointer-events-none
                absolute -top-14 left-1/2 -translate-x-1/2
                whitespace-nowrap
                rounded-md
                bg-neutral-900
                px-3 py-1.5
                text-xs text-white
                opacity-0
                group-hover:opacity-100
                shadow-lg
              "
            >
              <div className="font-medium">{person.name}</div>
              <div className="text-neutral-400 text-[11px]">
                {person.designation}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
