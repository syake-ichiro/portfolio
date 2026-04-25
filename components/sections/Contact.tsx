"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  CheckCircle2,
  Code2,
  Cpu,
  RefreshCw,
  Wrench,
} from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const EMAIL = "syake.ichiro@gmail.com";

const services = [
  { icon: Code2, label: "業務自動化ツール開発" },
  { icon: Cpu, label: "SaaSのMVP開発" },
  { icon: RefreshCw, label: "既存システムのリファクタ・パフォーマンス改善" },
  { icon: Wrench, label: "AI駆動開発の導入支援" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "p-1.5 rounded-md transition-colors duration-200",
        "text-fg-subtle hover:text-fg hover:bg-surface-2",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      )}
      aria-label="メールアドレスをコピー"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden />
      ) : (
        <Copy className="w-3.5 h-3.5" aria-hidden />
      )}
    </button>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-10">
            <Reveal>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-fg-muted font-medium">
                  Contact
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-fg leading-tight">
                  Let&apos;s build something
                  <br />
                  together.
                </h2>
                <p className="text-base leading-relaxed text-fg-muted">
                  副業として承っています。お気軽にご連絡ください。
                  <br />
                  返信は2〜3営業日以内を目安にしております。
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl",
                    "border border-border bg-surface",
                    "hover:border-accent/50 transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    "group"
                  )}
                >
                  <Mail className="w-4 h-4 text-fg-muted shrink-0" aria-hidden />
                  <span className="text-sm text-fg font-mono flex-1">
                    {EMAIL}
                  </span>
                  <CopyButton text={EMAIL} />
                </a>
                <a
                  href="https://github.com/syake-ichiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl",
                    "border border-border bg-surface",
                    "hover:border-accent/50 transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  )}
                >
                  <span className="text-fg-muted"><GithubIcon /></span>
                  <span className="text-sm text-fg">github.com/syake-ichiro</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-3">
                <p className="text-sm font-medium text-fg">対応可能な案件</p>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li
                      key={service.label}
                      className="flex items-center gap-3 text-sm text-fg-muted"
                    >
                      <service.icon
                        className="w-4 h-4 text-accent shrink-0"
                        aria-hidden
                      />
                      {service.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {status === "done" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "flex flex-col items-center justify-center gap-4 h-full min-h-[400px]",
                    "rounded-2xl border border-border bg-surface p-8 text-center"
                  )}
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2
                      className="w-7 h-7 text-emerald-500"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-fg mb-1">
                      ありがとうございます！
                    </p>
                    <p className="text-sm text-fg-muted">
                      2〜3営業日以内にご返信いたします。
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className={cn(
                    "space-y-5 rounded-2xl border border-border bg-surface p-6 md:p-8"
                  )}
                >
                  <Field
                    label="お名前"
                    required
                    error={errors.name?.message}
                  >
                    <input
                      {...register("name", {
                        required: "お名前を入力してください",
                      })}
                      className={inputClass(!!errors.name)}
                      placeholder="山田 太郎"
                    />
                  </Field>

                  <Field
                    label="メールアドレス"
                    required
                    error={errors.email?.message}
                  >
                    <input
                      {...register("email", {
                        required: "メールアドレスを入力してください",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "正しいメールアドレスを入力してください",
                        },
                      })}
                      type="email"
                      className={inputClass(!!errors.email)}
                      placeholder="taro@example.com"
                    />
                  </Field>

                  <Field
                    label="ご相談内容"
                    required
                    error={errors.message?.message}
                  >
                    <textarea
                      {...register("message", {
                        required: "ご相談内容を入力してください",
                      })}
                      rows={5}
                      className={cn(inputClass(!!errors.message), "resize-none")}
                      placeholder="ご相談の概要をお聞かせください"
                    />
                  </Field>

                  {status === "error" && (
                    <p className="text-sm text-red-500 text-center">
                      送信に失敗しました。時間をおいて再度お試しください。
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      "w-full py-3 rounded-lg font-medium text-sm",
                      "bg-accent text-accent-fg",
                      "hover:opacity-90 transition-opacity duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  >
                    {status === "sending" ? "送信中..." : "送信する"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-fg">
        {label}
        {required && (
          <span className="text-accent ml-1" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-4 py-2.5 text-sm rounded-lg",
    "bg-bg border transition-colors duration-200",
    "text-fg placeholder:text-fg-subtle",
    "focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent",
    hasError ? "border-red-500" : "border-border"
  );
}
