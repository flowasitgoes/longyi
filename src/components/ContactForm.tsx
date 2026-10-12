"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";

const METHODS = [
  "尚未確定",
  "超音波檢測 UT",
  "相控陣超音波檢測 PAUT",
  "射線檢測 RT",
  "磁粒檢測 MT",
  "滲透檢測 PT",
  "目視檢測 VT",
  "洩漏檢測 LT",
  "紅外線熱影像",
];

const fieldClass =
  "mt-2 w-full appearance-none border-0 border-b border-ink/20 bg-transparent py-3 text-base text-ink placeholder:text-ink/35";

function setRequiredMessage(
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) {
  const field = event.currentTarget;
  if (field.validity.valueMissing) {
    field.setCustomValidity("請填寫這個欄位");
    return;
  }
  if (field.validity.typeMismatch) {
    field.setCustomValidity("請輸入有效的電子郵件");
    return;
  }
  field.setCustomValidity("請檢查這個欄位");
}

function clearCustomMessage(
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) {
  event.currentTarget.setCustomValidity("");
}

export default function ContactForm() {
  const baseId = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sent) statusRef.current?.focus();
  }, [sent]);

  if (sent) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="border-t border-ink/15 pt-8 outline-none"
      >
        <p className="font-condensed text-[11px] tracking-[0.22em] text-ink/50">DEMO ONLY</p>
        <p className="mt-4 text-3xl font-medium tracking-tight">這份內容沒有送出。</p>
        <p className="mt-4 max-w-md text-[15px] leading-7 text-ink/70">
          表單只在這個瀏覽器裡走完一次送出動作，沒有寫入資料庫，也沒有寄信。不會有人收到這份詢價。
        </p>
        <button
          type="button"
          className="mt-8 border border-ink/20 px-5 py-3 text-sm hover:border-ink"
          onClick={() => setSent(false)}
        >
          返回表單
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-x-8 gap-y-7 sm:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        setSent(true);
      }}
    >
      <Field id={`${baseId}-name`} label="姓名">
        <input
          id={`${baseId}-name`}
          name="name"
          required
          autoComplete="name"
          placeholder="怎麼稱呼您"
          className={fieldClass}
          onInvalid={setRequiredMessage}
          onInput={clearCustomMessage}
        />
      </Field>
      <Field id={`${baseId}-company`} label="公司">
        <input
          id={`${baseId}-company`}
          name="company"
          autoComplete="organization"
          placeholder="公司或單位名稱"
          className={fieldClass}
        />
      </Field>
      <Field id={`${baseId}-phone`} label="電話">
        <input
          id={`${baseId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="選填"
          className={fieldClass}
        />
      </Field>
      <Field id={`${baseId}-email`} label="電子郵件">
        <input
          id={`${baseId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@company.com"
          className={fieldClass}
          onInvalid={setRequiredMessage}
          onInput={clearCustomMessage}
        />
      </Field>
      <div className="sm:col-span-2">
        <Field id={`${baseId}-method`} label="想了解的方法">
          <select
            id={`${baseId}-method`}
            name="method"
            defaultValue="尚未確定"
            className={`${fieldClass} bg-[length:10px_10px] bg-[position:right_0_center] bg-no-repeat pr-5`}
            style={{
              backgroundImage:
                "linear-gradient(45deg, transparent 50%, #16181d 50%), linear-gradient(135deg, #16181d 50%, transparent 50%)",
              backgroundPosition: "calc(100% - 7px) 1.15rem, calc(100% - 2px) 1.15rem",
              backgroundSize: "5px 5px, 5px 5px",
            }}
          >
            {METHODS.map((method) => (
              <option key={method}>{method}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id={`${baseId}-message`} label="需求說明">
          <textarea
            id={`${baseId}-message`}
            name="message"
            required
            rows={5}
            placeholder="工件類型、大約尺寸，以及想確認的問題。不確定的部分可以照實寫。"
            className={`${fieldClass} resize-y`}
            onInvalid={setRequiredMessage}
            onInput={clearCustomMessage}
          />
        </Field>
      </div>
      <div className="flex flex-col items-start gap-4 border-t border-ink/10 pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-sm leading-6 text-ink/55">
          這是展示表單。按下之後不會儲存，也不會寄信。
        </p>
        <button
          type="submit"
          className="bg-orange px-5 py-3.5 text-base font-medium text-navy transition-colors hover:bg-[#f06a38]"
        >
          送出展示表單
        </button>
      </div>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block font-condensed text-[11px] tracking-[0.2em] text-ink/55">
        {label}
      </label>
      {children}
    </div>
  );
}
