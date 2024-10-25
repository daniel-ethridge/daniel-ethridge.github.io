import json
import tkinter as tk
import tkinter.messagebox as mb
import numpy as np
from typing import TYPE_CHECKING, cast

if TYPE_CHECKING:
  from _typeshed import SupportsWrite, SupportsRead


class LitEntry:
  def __init__(self, json_file_loc):
    self.json_file_loc = json_file_loc
    self.root_ = tk.Tk()
    self.literature_titles_ = []
    self.lit_var = None
    self.edit_window = None
    self.delete_window = None
    self.remove_author_btn = None
    self.remove_tag_btn = None

    self.root_.title('Literature Entry')
    self.root_.config(bg='#0B5A81')
    self.f = ('Times', 14)

    self.main_frame = tk.Frame(self.root_, bd=2, relief=tk.SOLID, padx=10, pady=10)
    self.main_frame.grid(row=0, column=0, sticky="news")

    self.canvas = tk.Canvas(self.main_frame, bg='#CCCCCC', height=1050, width=920)
    scrollbar = tk.Scrollbar(self.main_frame, orient="vertical", command=self.canvas.yview)
    self.canvas.configure(yscrollcommand=scrollbar.set)

    self.right_frame = tk.Frame(self.canvas, bd=2, relief=tk.SOLID, padx=10, pady=10)
    self.right_frame.bind("<Configure>", lambda e: self.canvas.configure(scrollregion=self.canvas.bbox("all")))
    self.canvas.bind_all("<MouseWheel>", lambda e: self.canvas.yview_scroll(int(-1 * (e.delta / 120)), "units"))

    # Create All labels
    tk.Label(self.right_frame, text="Literature Entry", font=("Times", 16)).grid(row=0, column=1, sticky=tk.N,
                                                                                   pady=10)
    tk.Label(self.right_frame, text="Title", font=self.f).grid(row=1, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Year", font=self.f).grid(row=2, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Month", font=self.f).grid(row=3, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Authors", font=self.f).grid(row=4, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Link", font=self.f).grid(row=5, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Aims and\nResearch Questions", font=self.f).grid(row=6, column=0, sticky=tk.W,
                                                                                   pady=10)
    tk.Label(self.right_frame, text="Methods", font=self.f).grid(row=7, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Results", font=self.f).grid(row=8, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Discussion", font=self.f).grid(row=9, column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Tags", font=self.f).grid(row=10, column=0, sticky=tk.W, pady=10)

    # Title
    self.register_title = tk.Text(self.right_frame, font=self.f, wrap="word", width=40, height=3)
    self.register_title.grid(row=1, column=1, pady=10, padx=20)  # title

    # Set years
    self.register_year = tk.Entry(self.right_frame, font=self.f)
    self.register_year.grid(row=2, column=1, pady=10, padx=20)

    # Create months
    self.months = np.arange(1, 13).tolist()
    self.months = ["None"] + self.months
    self.months_var = tk.StringVar(self.root_)
    self.months_var.set(self.months[0])  # Default to None
    tk.OptionMenu(self.right_frame, self.months_var, *self.months).grid(row=3, column=1, pady=10, padx=20)

    # Authors
    self.authorframe = tk.Frame(self.right_frame, bg='#CCCCCC')  # Create new frame
    self.authorframe.grid(row=4, column=1, columnspan=1)
    self.author_btn = tk.Button(self.authorframe, text="Add Author", command=self.add_author_entry, width=15,
                                font=self.f, relief=tk.SOLID, cursor='hand2')
    self.author_btn.grid(row=1, column=0, pady=10, padx=20, columnspan=1)

    # Link
    self.register_link = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_link.grid(row=5, column=1, pady=30, padx=20)  # title

    # aims
    self.register_aims_questions = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_aims_questions.grid(row=6, column=1, pady=10, padx=20)  # title

    # Methods
    self.register_methods = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_methods.grid(row=7, column=1, pady=10, padx=20)  # title

    # Results
    self.register_results = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_results.grid(row=8, column=1, pady=10, padx=20)  # title

    # Discussion
    self.register_discussion = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_discussion.grid(row=9, column=1, pady=10, padx=20)  # title

    # Tags
    self.tagframe = tk.Frame(self.right_frame, bg='#CCCCCC')  # Create new frame
    self.tagframe.grid(row=10, column=1, columnspan=1)
    self.tag_btn = tk.Button(self.tagframe, text="Add Tag", command=self.add_tag_entry, width=15, font=self.f,
                            relief=tk.SOLID,
                        cursor='hand2')
    self.tag_btn.grid(row=1, column=0, pady=10, padx=20)

    # Buttons
    button_frame = tk.Frame(self.right_frame)
    button_frame.grid(row=11, column=1, columnspan=2, pady=30)

    # Submit button
    submit_btn = tk.Button(button_frame, width=15, text='Submit', font=self.f, relief=tk.SOLID, cursor='hand2',
                           command=self.write_data)
    submit_btn.grid(row=0, column=0, pady=10, padx=20)

    # Edit button
    edit_btn = tk.Button(button_frame, width=15, text='Edit an Entry', font=self.f, relief=tk.SOLID, cursor='hand2',
                         command=self.choose_edit_entry)
    edit_btn.grid(row=0, column=1, pady=10, padx=20)

    # Delete Button
    delete_btn = tk.Button(button_frame, width=15, text="Delete an Entry", font=self.f, relief=tk.SOLID,
                           cursor='hand2', command=self.delete_entry)
    delete_btn.grid(row=1, column=0, pady=10, padx=20)

    # Reset Button
    reset_btn = tk.Button(button_frame, width=15, text="Reset Fields", font=self.f, relief=tk.SOLID, cursor="hand2",
                          command=self.clear_fields)
    reset_btn.grid(row=1, column=1, pady=10, padx=20)

    self.root.columnconfigure(0, weight=1)
    self.root.rowconfigure(0, weight=1)
    self.main_frame.columnconfigure(0, weight=1)
    self.main_frame.rowconfigure(0, weight=1)

    self.canvas.create_window((0, 0), window=self.right_frame, anchor="nw")
    self.canvas.grid(row=0, column=0, sticky="news")
    scrollbar.grid(row=0, column=1, sticky="ns")

    # Pack the frame
    self.main_frame.pack(expand=True)

    self.right_frame.update()
    self.canvas.configure(height=self.right_frame.winfo_height(), width=self.right_frame.winfo_width())
    # self.root.configure(height=self.right_frame.winfo_height(), width=self.right_frame.winfo_width())


  @property
  def root(self):
    return self.root_

  @root.setter
  def root(self, value):
    self.root_ = value

  def clear_fields(self):
    self.register_title.delete("1.0", "end")
    self.register_year.delete(0, "end")
    self.months_var.set(self.months[0])
    self.register_link.delete(0, "end")
    self.register_aims_questions.delete("1.0", "end")
    self.register_methods.delete("1.0", "end")
    self.register_results.delete("1.0", "end")
    self.register_discussion.delete("1.0", "end")

    for widget in self.authorframe.winfo_children():
      if type(widget) == type(tk.Entry()):
          widget.destroy()

    for widget in self.tagframe.winfo_children():
      if type(widget) == type(tk.Entry()):
        widget.destroy()

  def write_data(self):

    if (self.register_title.get("1.0", "end").replace("\n", "") == "" or
      self.register_year.get() == ""):
      mb.showerror("Value Error", "An entry must have at least a title and a year.")
      return

    try:
      year = int(self.register_year.get())
    except ValueError:
      mb.showerror("Year Error", "The year must be in the form of an integer.")
      return

    author_entries = [element for element in self.authorframe.winfo_children() if type(element) == type(tk.Entry())]
    authors = [cast(tk.Entry(), author).get() for author in author_entries]

    tag_entries = [element for element in self.tagframe.winfo_children() if type(element) == type(tk.Entry())]
    tags = [cast(tk.Entry(), tag).get() for tag in tag_entries]

    if self.months_var.get().lower() == "none":
      month_data = 0
    else:
      month_data = self.months_var.get()

    data = [{
      "title": self.register_title.get("1.0", "end").replace("\n", ""),
      "year": year,
      "month": int(month_data),
      "authors": authors,
      "link": self.register_link.get(),
      "aims_questions": self.register_aims_questions.get("1.0", "end").replace("\n", ""),
      "methods": self.register_methods.get("1.0", "end").replace("\n", ""),
      "results": self.register_results.get("1.0", "end").replace("\n", ""),
      "discussion": self.register_discussion.get("1.0", "end").replace("\n", ""),
      "tags": tags
    }]

    try:
      with open(self.json_file_loc, "r") as jfile:
        jfile: SupportsRead
        json_file_data = json.load(jfile)
    except json.decoder.JSONDecodeError:
      json_file_data = []

    json_file_data += data

    with open(self.json_file_loc, "w") as jfile:
      jfile: SupportsWrite[str]
      json.dump(json_file_data, jfile)

    self.clear_fields()
    mb.showinfo("Success", "Literature entry successfully added!")

  # Authors
  def add_author_entry(self):
    num_rows = self.authorframe.grid_size()[1]
    tk.Entry(self.authorframe).grid(row=num_rows, column=0, columnspan=2, pady=10, padx=20)
    self.author_btn.grid(row=num_rows+1, column=0, pady=10, padx=20)

    if self.remove_author_btn is None:
      self.remove_author_btn = tk.Button(self.authorframe, text="Remove Author", command=self.remove_author_entry,
                                         width=15, font=self.f, relief=tk.SOLID, cursor='hand2')
      self.remove_author_btn.grid(row=num_rows+1, column=1, pady=10, padx=10)
    else:
      self.remove_author_btn.grid(row=num_rows+1, column=1, pady=10, padx=20)

    self.right_frame.update()
    self.canvas.configure(height=self.right_frame.winfo_height(), width=self.right_frame.winfo_width())

  def remove_author_entry(self):
    num_rows = self.authorframe.grid_size()[1]
    author_entries = [element for element in self.authorframe.winfo_children() if type(element) == type(tk.Entry())]
    num_author_entries = len(author_entries)
    author_entries[-1].destroy()
    self.author_btn.grid(row=num_rows, column=0, pady=10, padx=20)
    self.remove_author_btn.grid(row=num_rows, column=1, pady=10, padx=20)

    if num_author_entries <= 1:
      self.remove_author_btn.destroy()
      self.remove_author_btn = None

    self.right_frame.update()
    self.canvas.configure(height=self.right_frame.winfo_height(), width=self.right_frame.winfo_width())

  def add_tag_entry(self):
    num_rows = self.tagframe.grid_size()[1]
    tk.Entry(self.tagframe).grid(row=num_rows, column=0, pady=10, padx=20, columnspan=2)
    self.tag_btn.grid(row=num_rows+1, column=0, pady=10, padx=20)

    if self.remove_tag_btn is None:
      self.remove_tag_btn = tk.Button(self.tagframe, text="Remove Tag", command=self.remove_tag_entry,
                                         width=15, font=self.f, relief=tk.SOLID, cursor='hand2')
      self.remove_tag_btn.grid(row=num_rows+1, column=1, pady=10, padx=20)
    else:
      self.remove_tag_btn.grid(row=num_rows + 1, column=1, pady=10, padx=20)

    self.right_frame.update()
    self.canvas.configure(height=self.right_frame.winfo_height(), width=self.right_frame.winfo_width())

  def remove_tag_entry(self):
    num_rows = self.tagframe.grid_size()[1]
    tag_entries = [element for element in self.tagframe.winfo_children() if type(element) == type(tk.Entry())]
    num_author_entries = len(tag_entries)
    tag_entries[-1].destroy()
    self.tag_btn.grid(row=num_rows, column=0, pady=10, padx=20)
    self.remove_tag_btn.grid(row=num_rows, column=1, pady=10, padx=20)

    if num_author_entries <= 1:
      self.remove_tag_btn.destroy()
      self.remove_tag_btn = None

    self.right_frame.update()
    self.canvas.configure(height=self.right_frame.winfo_height(), width=self.right_frame.winfo_width())

  @property
  def literature_titles(self):
    try:
      with open(self.json_file_loc, "r") as jfile:
        json_file_data = json.load(jfile)
    except json.decoder.JSONDecodeError:
      return None

    self.literature_titles_ = []
    for entry in json_file_data:
      self.literature_titles_.append(entry["title"])
    return self.literature_titles_

  def choose_edit_entry(self):
    # Return if None
    if self.literature_titles is None:
      mb.showerror("No Entries",
                   "There are no literature entries. Please create one before trying to edit.")
      return

    self.edit_window = tk.Toplevel(self.root)
    self.edit_window.geometry("750x250")
    self.edit_window.title("Choose a Literature Entry")

    top_frame = tk.Frame(self.edit_window, bd=2, bg='#CCCCCC', relief=tk.SOLID, padx=3, pady=3)
    tk.Label(top_frame, text="Choose an entry").grid(column=0, row=0, pady=10, padx=20)
    self.lit_var = tk.StringVar(self.root)
    self.lit_var.set(self.literature_titles_[0])
    tk.OptionMenu(top_frame, self.lit_var, *self.literature_titles_).grid(row=1, column=0, pady=10, padx=20)
    tk.Button(top_frame, text="OK", command=self.confirm_edit_choice).grid(row=2, column=0, pady=10, padx=20)
    top_frame.pack()

  def delete_entry(self):
    # Return if None
    if self.literature_titles is None:
      mb.showerror("No Entries",
                   "There are no literature entries. Please create one before trying to delete.")
      return

    self.delete_window = tk.Toplevel(self.root)
    self.delete_window.geometry("750x250")
    self.delete_window.title("Delete a Literature Entry")

    top_frame = tk.Frame(self.delete_window, bd=2, bg='#CCCCCC', relief=tk.SOLID, padx=3, pady=3)
    tk.Label(top_frame, text="Choose an entry to delete").grid(column=0, row=0, pady=10, padx=20)
    self.lit_var = tk.StringVar(self.root)
    self.lit_var.set(self.literature_titles_[0])
    tk.OptionMenu(top_frame, self.lit_var, *self.literature_titles_).grid(row=1, column=0, pady=10, padx=20)
    tk.Button(top_frame, text="OK", command=self.confirm_delete).grid(row=2, column=0, pady=10, padx=20)
    top_frame.pack()

  def confirm_delete(self):
    if self.delete_window is None:
      return

    self.delete_window.destroy()
    self.delete_window = None

    with open(self.json_file_loc, "r") as f:
      lit_data = json.load(f)

    idx = 0
    for entry in lit_data:
      if entry["title"] == self.lit_var.get():
        break
      else:
        idx += 1

    if idx >= len(lit_data):
      mb.showerror("Entry not Found", "Could not locate desired entry")
      return

    del lit_data[idx]
    with open(self.json_file_loc, "w") as jfile:
      jfile: SupportsWrite[str]
      json.dump(lit_data, jfile)

    mb.showinfo("Sucess", "Entry Successfully Deleted")

  def confirm_edit_choice(self):
    if self.edit_window is None:
      return

    self.edit_window.destroy()
    self.edit_window = None

    with open(self.json_file_loc, "r") as f:
      lit_data = json.load(f)

    idx = 0
    for entry in lit_data:
      if entry["title"] == self.lit_var.get():
        break
      else:
        idx += 1

    if idx >= len(lit_data):
      mb.showerror("Could not locate desired entry")
      return

    # Create text variables to insert
    entry = lit_data[idx]
    keys = entry.keys()
    title = entry["title"] if "title" in keys else ""
    year = entry["year"] if "year" in keys else ""
    link = entry["link"] if "link" in keys else ""
    aims_questions = entry["aims_questions"] if "aims_questions" in keys else ""
    methods = entry["methods"] if "methods" in keys else ""
    results = entry["results"] if "results" in keys else ""
    discussion = entry["discussion"] if "discussion" in keys else ""

    # Set fields
    self.clear_fields()
    self.register_title.insert("1.0", title)
    self.register_year.insert(0, year)
    self.register_link.insert(0, link)
    self.register_aims_questions.insert("1.0", aims_questions)
    self.register_methods.insert("1.0", methods)
    self.register_results.insert("1.0", results)
    self.register_discussion.insert("1.0", discussion)

    # Set month
    if "month" in keys:
      if entry["month"] in self.months:
        self.months_var.set(self.months[entry["month"]])
      else:
        self.months_var.set(self.months[0])
    else:
      self.months_var.set(self.months[0])

    # Set authors
    if "authors" in keys:
      for author in entry["authors"]:
        self.add_author_entry()
        author_entry_fields = [element for element in self.authorframe.winfo_children()
                               if type(element) == type(tk.Entry())]
        cast(tk.Entry(), author_entry_fields[-1]).insert(0, author)

    # Set tags
    if "tags" in keys:
      for tag in entry["tags"]:
        self.add_tag_entry()
        tag_entry_fields = [element for element in self.tagframe.winfo_children()
                               if type(element) == type(tk.Entry())]
        cast(tk.Entry(), tag_entry_fields[-1]).insert(0, tag)

    del lit_data[idx]
    with open(self.json_file_loc, "w") as jfile:
      jfile: SupportsWrite[str]
      json.dump(lit_data, jfile)


lit_entry = LitEntry("./src/app/_services/json/literature.json")
lit_entry.root.mainloop()
