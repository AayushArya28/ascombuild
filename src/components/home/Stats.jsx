import React from "react";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const endValue = parseInt(end.replace(/,/g, ""), 10); // Remove commas for calculation
    const incrementTime = (duration / endValue) * 1000; // Calculate rough interval (not used directly in RAF)

    // Using simple ease-out logic or linear for simplicity
    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // select an easing function (easeOutExpo)
      // 1 - Math.pow(2, -10 * percentage)
      // Or just simple generic ease
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      const current = Math.floor(ease * endValue);
      setCount(current);

      if (progress < duration) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  // Format number with commas
  const formattedCount = count.toLocaleString() + suffix;

  return <span ref={countRef}>{formattedCount}</span>;
};

const Stats = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-bold text-gray-900 dark:text-white">
            ASCOM Buildcon at a Glance
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Delivering quality structural solutions across India since our inception.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">
              <CountUp end="36" suffix="+" />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Years of Experience
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 21h18M5 21v-8a2 2 0 012-2h14a2 2 0 012 2v2M5 7V5a2 2 0 012-2h14a2 2 0 012 2v2m-2 2h2m-2-4h2"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">
              <CountUp end="75" suffix="+" />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Major Projects
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">
              <CountUp end="12" suffix="+" />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              States Covered
            </p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="text-red-500 mb-2 flex justify-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-red-600">
              <CountUp end="85" suffix="%" />
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Client Retention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
