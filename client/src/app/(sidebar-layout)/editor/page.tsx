/**
 * Confused about this file? Yeah. Me too.
 *
 * References:
 * @see {@link https://stackoverflow.com/questions/72599597/what-is-proper-way-to-import-script-files-in-next-js}
 *
 * @see {@link ./EditorScripts.tsx} imported scripts
 * @see {@link ./editor.module.css} imported stylesheets
 * @see {@link client/public} static dist files?
 */

"use client";

import { Chat } from "@/components/editor/Chat";
import { Editor } from "@/components/editor/Editor";

import styles from "./editor.module.css";

export default function Page() {
  return (
    <div
      className={`flex h-full min-h-full w-full flex-row justify-between space-x-8 bg-slate-50 px-8 py-8`}
    >
      <Editor styles={styles} />

      <Chat />
    </div>
  );
}
