'use client';

import { motion } from 'framer-motion';
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiAndroid,
  SiGit,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiScikitlearn,
} from 'react-icons/si';
import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'Python', icon: SiPython, level: 95 },
      { name: 'TensorFlow', icon: SiTensorflow, level: 90 },
      { name: 'PyTorch', icon: SiPytorch, level: 85 },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 90 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'Vue.js', icon: SiVuedotjs, level: 80 },
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
    ],
  },
  {
    title: 'Mobile & Tools',
    skills: [
      { name: 'Android', icon: SiAndroid, level: 80 },
      { name: 'Java', icon: Code2, level: 85 },
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-xl glass hover:bg-accent/50 transition-all group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.level}%</p>
                        </div>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-primary/60"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

