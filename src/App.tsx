/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Book } from "./pages/Book";
import { Routes as RoutesPage } from "./pages/Routes";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="branches" element={<div className="p-12 text-center text-xl font-medium">Branch list under Construction</div>} />
          <Route path="faq" element={<div className="p-12 text-center text-xl font-medium">FAQ page under Construction</div>} />
          <Route path="terms" element={<div className="p-12 text-center text-xl font-medium">Terms page under Construction</div>} />
          <Route path="*" element={<div className="p-12 text-center text-2xl font-bold">404 - Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
