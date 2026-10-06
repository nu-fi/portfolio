import React from 'react';
import Panel from '../craft-ui/Panel';
import Tag from '../craft-ui/Tag';

export default function Toolbox() {
  const categories = [
    {
      title: 'Software Crafting',
      subtitle: 'Languages & Frameworks',
      color: 'text-sage',
      skills: ['Python', 'JavaScript', 'React (Vite)', 'Tailwind CSS', 'Django REST Framework', 'Gradio']
    },
    {
      title: 'AI & Data',
      subtitle: 'The Pattern Work',
      color: 'text-terracotta',
      skills: ['PyTorch', 'ONNX Runtime', 'Gymnasium (PPO)', 'SQL', 'PostgreSQL', 'MySQL', 'Tableau', 'Streamlit']
    },
    {
      title: 'Infrastructure',
      subtitle: 'The Loom & Tools',
      color: 'text-denim',
      skills: ['Docker', 'Docker Compose', 'GitHub Actions (CI/CD)', 'Prometheus', 'Grafana', 'Hugging Face Spaces']
    }
  ];

  return (
    <section className="py-1 max-w-5xl mx-auto w-full pb-20" id="toolbox">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-charcoal mb-4">The Crafter's Toolbox</h2>
        <p className="text-faded text-lg max-w-2xl mx-auto">
          The needles, hooks, and yarns I use to weave data and logic into robust digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Panel key={category.title} className="flex flex-col h-full">
            <h3 className={`text-2xl font-headings mb-1 ${category.color}`}>
              {category.title}
            </h3>
            <span className="text-xs font-headings uppercase tracking-widest text-stitches mb-6 block">
              {category.subtitle}
            </span>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}