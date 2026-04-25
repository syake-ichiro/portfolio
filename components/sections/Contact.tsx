"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-lg mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-3 text-center">
            お仕事のご相談
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="text-center text-[#666666] leading-relaxed mb-2">
            副業として承っています。お気軽にご連絡ください。
          </p>
          <p className="text-center text-sm text-[#666666] mb-10">
            ※ 返信は2〜3営業日以内を目安にしております。
          </p>
        </FadeIn>

        {status === "done" ? (
          <FadeIn>
            <div className="bg-[#f0f4ff] border border-blue-100 rounded-xl p-8 text-center">
              <p className="text-[#2563eb] font-medium mb-2">
                お問い合わせありがとうございます！
              </p>
              <p className="text-sm text-[#666666]">
                2〜3営業日以内にご返信いたします。
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#f8f8f8] border border-[#e5e5e5] rounded-xl p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-[#111111] mb-1.5">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("name", { required: "お名前を入力してください" })}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e5e5] rounded-md text-sm text-[#111111] placeholder-[#999] focus:outline-none focus:border-[#2563eb] transition-colors"
                  placeholder="山田 太郎"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111111] mb-1.5">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "メールアドレスを入力してください",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "正しいメールアドレスを入力してください",
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e5e5] rounded-md text-sm text-[#111111] placeholder-[#999] focus:outline-none focus:border-[#2563eb] transition-colors"
                  placeholder="taro@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111111] mb-1.5">
                  ご相談内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("message", {
                    required: "ご相談内容を入力してください",
                  })}
                  rows={5}
                  className="w-full px-4 py-2.5 bg-white border border-[#e5e5e5] rounded-md text-sm text-[#111111] placeholder-[#999] focus:outline-none focus:border-[#2563eb] transition-colors resize-none"
                  placeholder="ご相談の概要をお聞かせください"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#2563eb] text-white py-3 rounded-md font-medium font-inter hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
