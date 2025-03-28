"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { Github, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

// Types for individual projects
interface UserInfo {
  name: string;
  role: string;
  avatar: string;
}

interface IndividualProject {
  id: number;
  name: string;
  description: string;
  image: string;
  user: UserInfo;
}

// Type for group projects
interface GroupProject {
  id: number;
  name: string;
  image: string;
  aim: string;
  about: string;
  documentation: string;
  application: string;
  team: string[];
}

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState("individual")

  const individualProjects: IndividualProject[] = [
    {
      id: 1,
      name: "PROJECT NAME",
      description: "Project description (short)",
      image: "/placeholder.svg?height=200&width=300",
      user: {
        name: "Name",
        role: "Role No.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 2,
      name: "PROJECT NAME",
      description: "Project description (short)",
      image: "/placeholder.svg?height=200&width=300",
      user: {
        name: "Name",
        role: "Role No.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 3,
      name: "PROJECT NAME",
      description: "Project description (short)",
      image: "/placeholder.svg?height=200&width=300",
      user: {
        name: "Name",
        role: "Role No.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 4,
      name: "PROJECT NAME",
      description: "Project description (short)",
      image: "/placeholder.svg?height=200&width=300",
      user: {
        name: "Name",
        role: "Role No.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 5,
      name: "PROJECT NAME",
      description: "Project description (short)",
      image: "/placeholder.svg?height=200&width=300",
      user: {
        name: "Name",
        role: "Role No.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 6,
      name: "PROJECT NAME",
      description: "Project description (short)",
      image: "/placeholder.svg?height=200&width=300",
      user: {
        name: "Name",
        role: "Role No.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  const groupProjects: GroupProject[] = [
    {
      id: 1,
      name: "PROJECT NAME",
      image: "/placeholder.svg?height=200&width=300",
      aim: "AIM DESCRIPTION",
      about: "ABOUT THE PROJECT DESCRIPTION",
      documentation: "DOCUMENTATION DESCRIPTION",
      application: "APPLICATION DESCRIPTION",
      team: ["Name", "Name", "Name", "Name"],
    },
    {
      id: 2,
      name: "PROJECT NAME",
      image: "/placeholder.svg?height=200&width=300",
      aim: "AIM DESCRIPTION",
      about: "ABOUT THE PROJECT DESCRIPTION",
      documentation: "DOCUMENTATION DESCRIPTION",
      application: "APPLICATION DESCRIPTION",
      team: ["Name", "Name", "Name", "Name"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2e3b] to-[#0a1218]">
      {/* Header with tabs */}
      <div className="bg-[#2a7a78]/90 backdrop-blur-md p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 p-2">
            <TabButton
              isActive={activeTab === "individual"}
              onClick={() => setActiveTab("individual")}
              label="INDIVIDUAL PROJECTS"
            />
            <TabButton isActive={activeTab === "group"} onClick={() => setActiveTab("group")} label="GROUP PROJECTS" />
          </div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto p-6">
        <LayoutGroup>
          <AnimatePresence mode="wait">
            {activeTab === "individual" ? (
              <motion.div
                key="individual"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {individualProjects.map((project) => (
                  <IndividualProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6"
              >
                {groupProjects.map((project) => (
                  <GroupProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  )
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function TabButton({ isActive, onClick, label }: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
        isActive ? "bg-white text-[#2a7a78]" : "bg-[#3a8a88]/30 text-white/90 backdrop-blur-sm hover:bg-[#3a8a88]/50"
      }`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.button>
  )
}

interface IndividualProjectCardProps {
  project: IndividualProject;
}

function IndividualProjectCard({ project }: IndividualProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden bg-[#0f2a42]/40 backdrop-blur-md border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl transition-all"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <div className="p-3">
        <motion.div
          className="rounded-lg overflow-hidden bg-gray-200 aspect-[3/2]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="p-4 text-white">
        <motion.h3
          className="text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {project.name}
        </motion.h3>
        <motion.p
          className="text-sm text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          className="mt-4 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex-shrink-0">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 border border-white/20">
              <Image
                src={project.user.avatar || "/placeholder.svg"}
                alt={project.user.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="text-sm font-medium">{project.user.name}</div>
            <div className="text-xs text-white/60">{project.user.role}</div>
          </div>
          <div className="ml-auto flex gap-2">
            <SocialIcon icon={<Github size={16} />} />
            <SocialIcon icon={<Twitter size={16} />} />
            <SocialIcon icon={<Instagram size={16} />} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

interface GroupProjectCardProps {
  project: GroupProject;
}

function GroupProjectCard({ project }: GroupProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden bg-[#0f2a42]/40 backdrop-blur-md border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl transition-all"
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left side with image and project name */}
        <div className="md:w-1/4 p-4 flex flex-col">
          <div className="rounded-lg overflow-hidden bg-gray-200 aspect-square mb-4">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>

          <div className="text-white/80 text-sm space-y-1">
            {project.team.map((member, index) => (
              <div key={index}>{member}</div>
            ))}
          </div>
        </div>

        {/* Right side with project details */}
        <div className="md:w-3/4 p-4 text-white">
          <div className="space-y-4">
            <DescriptionItem title="AIM" content={project.aim} />
            <DescriptionItem title="ABOUT THE PROJECT" content={project.about} />
            <DescriptionItem title="DOCUMENTATION" content={project.documentation} />
            <DescriptionItem title="APPLICATION" content={project.application} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface DescriptionItemProps {
  title: string;
  content: string;
}

function DescriptionItem({ title, content }: DescriptionItemProps) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <h4 className="text-sm font-semibold text-[#3a8a88]">{title}</h4>
      <p className="text-sm text-white/80">{content}</p>
    </motion.div>
  )
}

interface SocialIconProps {
  icon: React.ReactNode;
}

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <motion.div
      className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.div>
  )
}

