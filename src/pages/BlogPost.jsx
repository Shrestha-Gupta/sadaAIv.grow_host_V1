import { Link } from "react-router-dom";
import ScrollReveal from "../components/ui/ScrollReveal";

const content = `The most impactful AI use cases are not the flashy demos -- they are the quiet automations that free up 20 hours a week from every team member.

In 2026, AI is no longer a novelty. It is becoming infrastructure. The organisations winning are not the ones experimenting with AI -- they are the ones that have embedded it into how work actually gets done.

The difference is workflow integration. A chatbot on a website is a feature. An AI system that processes incoming briefs, routes them to the right team member, generates a first draft, and sends a status update to the client -- that is infrastructure.

## What makes a workflow actually work

Start with the highest-friction points in your operation. Where does work slow down? Where do people spend time doing things a system could do? That is where automation creates the most value.

Build around your team, not against them. The goal is not to replace how people work -- it is to remove the parts that slow them down. Your team should be doing more of the work that requires judgment, not less.

## Getting started

The barrier to entry for AI workflow automation is lower than most teams think. The tools exist. The APIs are accessible. What is missing is usually the integration work and the operational thinking -- connecting the tools to how your team actually works.

That is where we come in.`;

export default function BlogPost() {
  const paragraphs = content.split("\n\n");
  return (
    <main className="page-enter">
      <section className="blogpost-hero">
        <div className="wrap">
          <Link to="/blog" className="blogpost-back">&larr; Back to Insights</Link>
          <ScrollReveal>
            <span className="blog-category">AI & Automation</span>
            <h1>How AI Workflows Are Changing the Way Teams Operate in 2026</h1>
            <div className="blogpost-meta">
              <span>Aug 28, 2026</span>
              <span>6 min read</span>
              <span>sadaAIv.grow</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="wrap">
        <div className="blogpost-body">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) return <h2 key={i}>{para.replace("## ", "")}</h2>;
            return <p key={i}>{para}</p>;
          })}
        </div>

        <div className="blogpost-footer">
          <ScrollReveal>
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 18, marginBottom: 8, fontFamily: "Playfair Display, serif" }}>Want to build this for your team?</h4>
              <p style={{ color: "var(--ink-2)", fontSize: 15, maxWidth: "44ch" }}>We help organisations implement AI workflows that actually get used. Get in touch and we will scope something practical.</p>
            </div>
            <div className="blogpost-ctas">
              <Link to="/contact" className="btn btn-dark">Work with us &rarr;</Link>
              <Link to="/blog" className="btn btn-outline">&larr; Back to Insights</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}