export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills?: string[];
  startDate?: string;
  preference?: string;
}

const today = new Date();
export const contactData: Array<FormValues> = [
  {
    id: 1,
    name: "Shawn Spencer",
    role: "Dev",
    skills: ["React", "Angular"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}}`,
    preference: "Work from Home"
  },
  {
    id: 2,
    name: "Burton Guster",
    role: "Dev",
    skills: ["React"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}}`,
    preference: "Work from Home"
  },
  {
    id: 1,
    name: "Shawn1 Spencer",
    role: "Dev",
    skills: ["js"],
    startDate: `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}}`,
    preference: "Work from Home"
  }
];
