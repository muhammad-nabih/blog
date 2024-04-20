import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { motion } from "framer-motion";

export default function TimelineComponent() {
  return (
    <Timeline style={{}} className="container mx-auto  w-10/12 my-24">
      <motion.h2
        className="font-bold cursor-pointer bg-slate-950 text-purple-400 text-2xl rounded w-fit p-2 my-5 max-sm:text-sm"
        animate={{ y: [0, -10, 0], opacity: [0, 1] }}
        whileHover={{ scale: 0.9 }}
      >
        المخطط الزمني للانتهاء من المشروع
      </motion.h2>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>فبراير ٢٠٢٤</Timeline.Time>
          <Timeline.Title>
            <span className="text-sky-800">بداية المشروع</span>
          </Timeline.Title>
          <Timeline.Body>
            بدأت رحلتنا في فبراير ٢٠٢٤، حيث قمنا، كمجموعة من الطلاب الطموحين،
            بتطوير منصتنا للتجارة الإلكترونية المتخصصة في المنتجات والأجهزة
            التعليمية.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>مارس ٢٠٢٤</Timeline.Time>
          <Timeline.Title>
            <span className="text-sky-800">والتطوير مرحلة التصميم</span>
          </Timeline.Title>
          <Timeline.Body>
            خلال شهر مارس ٢٠٢٤، قمنا بتصميم وتطوير واجهة المستخدم ووظائف منصتنا
            للتجارة الإلكترونية بدقة، مضمونين تجربة مستخدم سلسة وتنقلًا سهلًا.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>أبريل ٢٠٢٤</Timeline.Time>
          <Timeline.Title>
            <span className="text-sky-800"> مرحلة الاختبار والنشر </span>
          </Timeline.Title>
          <Timeline.Body>
            مع دخول شهر أبريل ٢٠٢٤، قمنا بإجراء اختبارات شاملة لضمان قوة
            وموثوقية منصتنا. بعد الاختبار الناجح، قمنا بنشر حلولنا للتجارة
            الإلكترونية بفخر لخدمة عملائنا.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>مايو ٢٠٢٤</Timeline.Time>
          <Timeline.Title>
            <span className="text-sky-800">الإطلاق وما بعده</span>
          </Timeline.Title>
          <Timeline.Body>
            في مايو ٢٠٢٤، قمنا بإطلاق منصتنا للتجارة الإلكترونية للجمهور، مما
            يعتبر بداية رحلتنا لتوفير منتجات تعليمية عالية الجودة لعملائنا
            الكرام. التزامنا بالتحسين المستمر ورضا العملاء يدفعنا إلى الأمام حيث
            نسعى للابتكار والنمو خارج التوقعات.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
