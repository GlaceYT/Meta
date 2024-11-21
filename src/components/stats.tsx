import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StatsSec = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Formal, user-friendly heading */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 sm:text-5xl">
          Trusted by Thousands of Discord Users
        </h2>

        {/* Updated description for website UI */}
        <p className="mt-4 text-gray-400 sm:text-lg">
          Our bot powers hundreds of servers, offering over 300+ unique commands and serving thousands of users with live, real-time interactions. Here's a look at our current statistics.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Cards */}
        {[
          { title: "Commands", value: 300, suffix: "+", color: "text-blue-400" },
          { title: "Servers", value: 25, suffix: "+", color: "text-pink-400" },
          { title: "Total Users", value: 2500, suffix: "+", color: "text-green-400" },
          { title: "Active Users", value: 1000, suffix: "+", color: "text-yellow-400" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl p-8 text-center dark:bg-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <dt className="order-last text-lg font-medium text-gray-400">{stat.title}</dt>
            <dd className={`text-5xl font-extrabold ${stat.color} md:text-6xl`}>
              {inView ? <CountUp end={stat.value} suffix={stat.suffix} duration={3} /> : stat.value}
            </dd>
          </motion.div>
        ))}
      </dl>
    </motion.div>
  );
};

export default StatsSec;
