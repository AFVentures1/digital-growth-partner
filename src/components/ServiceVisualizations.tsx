import { motion } from "framer-motion";

export function WireframeViz() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="w-full max-w-[280px] space-y-3">
        {[1, 0.7, 1, 0.5, 1, 0.3].map((w, i) => (
          <motion.div
            key={i}
            className="h-3 bg-primary/20 rounded-sm"
            style={{ width: `${w * 100}%` }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          />
        ))}
        <div className="grid grid-cols-3 gap-2 pt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="aspect-square bg-primary/10 border border-primary/20 rounded-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BookingViz() {
  const slots = ["9:00", "10:30", "12:00", "14:00", "16:30"];
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="space-y-2 w-full max-w-[240px]">
        {slots.map((time, i) => (
          <motion.div
            key={time}
            className={`flex items-center justify-between px-4 py-2 rounded-sm border ${
              i === 2 ? "border-primary bg-primary/10" : "border-border bg-card"
            }`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="text-sm font-body text-foreground">{time}</span>
            <div className={`w-2 h-2 rounded-full ${i === 2 ? "bg-primary" : "bg-muted-foreground/30"}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ChatbotViz() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="space-y-3 w-full max-w-[260px]">
        {[
          { align: "left", w: "70%" },
          { align: "right", w: "50%" },
          { align: "left", w: "85%" },
        ].map((msg, i) => (
          <motion.div
            key={i}
            className={`flex ${msg.align === "right" ? "justify-end" : "justify-start"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <div
              className={`h-8 rounded-sm ${
                msg.align === "right" ? "bg-primary/20" : "bg-card border border-border"
              }`}
              style={{ width: msg.w }}
            />
          </motion.div>
        ))}
        <motion.div
          className="flex items-center gap-1 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function CRMViz() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="w-full max-w-[280px] space-y-2">
        {["Customer A", "Customer B", "Customer C", "Customer D"].map((name, i) => (
          <motion.div
            key={name}
            className="flex items-center gap-3 px-3 py-2 bg-card border border-border rounded-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="w-6 h-6 rounded-full bg-primary/15 flex-shrink-0" />
            <div className="flex-1">
              <div className="h-2 bg-foreground/20 rounded-sm w-20" />
            </div>
            <div className="h-2 bg-primary/30 rounded-sm w-8" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AutomationViz() {
  const steps = [0, 1, 2, 3];
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-2">
        {steps.map((i) => (
          <motion.div key={i} className="flex flex-col items-center">
            <motion.div
              className="w-12 h-12 border border-primary/30 bg-primary/5 rounded-sm flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-3 h-3 bg-primary/40 rounded-sm" />
            </motion.div>
            {i < 3 && (
              <motion.div
                className="w-px h-6 bg-primary/20"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.2 + 0.15 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsViz() {
  const bars = [40, 65, 50, 80, 70, 95, 85];
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="flex items-end gap-3 h-[140px]">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-6 bg-primary/20 rounded-sm origin-bottom"
            style={{ height: `${h}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
}
