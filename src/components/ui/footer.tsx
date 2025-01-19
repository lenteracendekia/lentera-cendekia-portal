import React, { useMemo } from "react";
import { Brand } from "@/components/ui/brand";
import { Facebook, Instagram, MessageCircleMore, Twitter } from "lucide-react";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  overview: {
    title: string;
    description: string;
  };
  lists: {
    list_title: string;
    list_items: {
      item_title: string;
      action: () => void;
    }[];
  }[];
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
  };
}

export const Footer: React.FC<FooterProps> = ({
  overview,
  lists,
  contact,
  ...rest
}) =>
  useMemo(
    () => (
      <footer className="bg-gray-50 text-gray-800 p-10 mt-24" {...rest}>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                <span className="flex gap-2 text-black">
                  <Brand />
                  {overview.title}
                </span>
              </h2>
              <p className="mt-4 text-sm text-gray-600">
                {overview.description}
              </p>
            </div>

            {lists.map((list, index) => (
              <div key={index}>
                <h4 className="font-semibold text-lg text-gray-900 mb-4">
                  Mata Pelajaran
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {list.list_items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item.item_title}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-4">
                {contact.title}
              </h4>
              <p className="text-sm text-gray-600">
                <strong>Hubungi Kami:</strong> <br />
                {contact.phone}
              </p>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Email Kami Pada:</strong> <br />
                {contact.email}
              </p>
              <p className="text-sm text-gray-600 mt-4">
                <strong>Alamat Kami:</strong> <br />
                {contact.address}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>© 2025 Lentera Cendekia, All Right Reserved.</p>
            <div className="flex justify-center space-x-4 mt-4 text-neutral-base">
              <a href="#" className="hover:text-warning-60">
                <Facebook />
              </a>
              <a href="#" className="hover:text-warning-60">
                <Instagram />
              </a>
              <a href="#" className="hover:text-warning-60">
                <Twitter />
              </a>
              <a href="#" className="hover:text-warning-60">
                <MessageCircleMore />
              </a>
            </div>
          </div>
        </div>
      </footer>
    ),
    [overview, lists, contact, rest],
  );
