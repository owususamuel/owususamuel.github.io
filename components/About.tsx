'use client';

export function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-light mb-6">About</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Welcome! I'm a Machine Learning Engineer & Software Developer based in Aberdeen, Scotland, UK. 
            I specialize in Machine Learning, with professional experience working with Python, 
            JavaScript, and Java.
          </p>
          <p>
            I have experience working with frameworks like PyTorch, Numpy, Pandas, Scikit-learn, and GenAI models.
           I'm passionate about leveraging AI and ML to solve real-world problems and create impactful solutions.
          </p>
          <p>
            My research interests lie at the intersection of <strong className="text-foreground">Machine Learning</strong>, 
            <strong className="text-foreground"> Deep Learning</strong>, and <strong className="text-foreground">Software Engineering</strong>. 
            I enjoy building intelligent systems that can make a meaningful difference in people's lives.
          </p>
        </div>
      </div>
    </section>
  );
}
