import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, FileDown, Send, CheckCircle2, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../config/profileConfig";
import { handleDownloadCV } from "../utils/downloadCv";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    projectType: "Enterprise Product Design",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Transparent mailto fallback as required by CONTENT_GUIDELINES
    const subject = encodeURIComponent(`[Inquiry] ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganisation: ${formData.organisation || "N/A"}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl space-y-4"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
          Let’s discuss your product, research, or design system challenges.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
          Whether you are tackling a high-density enterprise application, exploring a new mobile product concept, or looking to introduce AI-assisted design operations, I’d love to connect.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-sand-300 shadow-xs space-y-5">
            <h2 className="text-base font-display font-bold text-slate-900">
              Direct Contact & Channels
            </h2>

            {/* Email Box */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-bold">
                Email
              </span>
              <div className="flex items-center justify-between gap-2 p-3 bg-sand-50 rounded-xl border border-sand-200">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 break-all font-mono"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-sand-200 rounded-lg transition-colors shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Links List */}
            <div className="space-y-2.5 pt-2">
              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-sand-200 hover:border-brand-300 hover:bg-brand-50/50 transition-colors text-xs sm:text-sm text-slate-800 font-medium group min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-brand-600" />
                  <span className="font-semibold">LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-sand-200 hover:border-brand-300 hover:bg-brand-50/50 transition-colors text-xs sm:text-sm text-slate-800 font-medium group min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-brand-600" />
                  <span className="font-semibold">GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
              </a>

              <a
                href={profile.cvPath}
                download={profile.cvFilename}
                onClick={handleDownloadCV}
                className="flex items-center justify-between p-3.5 rounded-xl bg-brand-50/70 border border-brand-200 hover:bg-brand-100 transition-colors text-xs sm:text-sm text-brand-800 font-semibold group min-h-[44px] cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileDown className="w-4 h-4 text-brand-600" />
                  <span>My Resume</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-brand-600">Verified</span>
              </a>
            </div>

            <div className="pt-3 border-t border-sand-200 text-xs text-slate-600 space-y-1">
              <div><strong>Location:</strong> {profile.location}</div>
              <div><strong>Availability:</strong> {profile.availability}</div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand-300 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-display font-bold text-slate-900">
                Send a Message
              </h2>
              <p className="text-xs text-slate-600 mt-0.5 font-body">
                Submitting this form launches your default email client with your message pre-formatted.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Email Client Launched
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-body">
                  Your mail client has been opened with your inquiry pre-populated. You can also write directly to <a href={`mailto:${profile.email}`} className="text-brand-600 underline font-medium">{profile.email}</a>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-display font-semibold text-brand-600 hover:underline pt-2 inline-block cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-display font-semibold text-slate-800 block">
                      Your Name <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Wong"
                      className="w-full px-3.5 py-2.5 text-sm bg-sand-50/70 border border-sand-300 rounded-xl focus:bg-white focus:border-brand-500 focus:outline-none min-h-[44px]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-display font-semibold text-slate-800 block">
                      Email Address <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-sand-50/70 border border-sand-300 rounded-xl focus:bg-white focus:border-brand-500 focus:outline-none min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organisation */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-org" className="text-xs font-display font-semibold text-slate-800 block">
                      Company / Organisation
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Acme Logistics"
                      className="w-full px-3.5 py-2.5 text-sm bg-sand-50/70 border border-sand-300 rounded-xl focus:bg-white focus:border-brand-500 focus:outline-none min-h-[44px]"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-type" className="text-xs font-display font-semibold text-slate-800 block">
                      Inquiry Focus
                    </label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-sand-50/70 border border-sand-300 rounded-xl focus:bg-white focus:border-brand-500 focus:outline-none min-h-[44px]"
                    >
                      <option value="Enterprise Product Design">Enterprise Product Design</option>
                      <option value="Mobile UX / Concept Exploration">Mobile UX / Concept Exploration</option>
                      <option value="AI Workflow & Prototyping">AI Workflow & Prototyping</option>
                      <option value="UX Research & Design Systems">UX Research & Design Systems</option>
                      <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-display font-semibold text-slate-800 block">
                    Message <span className="text-brand-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your product challenge, timeline, or discussion topic..."
                    className="w-full px-3.5 py-2.5 text-sm bg-sand-50/70 border border-sand-300 rounded-xl focus:bg-white focus:border-brand-500 focus:outline-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 text-white font-display font-semibold text-sm hover:bg-brand-600 transition-colors shadow-xs min-h-[44px] cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
