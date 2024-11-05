import json
import tkinter as tk
import tkinter.messagebox as mb
import numpy as np
from typing import TYPE_CHECKING, cast
if TYPE_CHECKING:
  from _typeshed import SupportsWrite, SupportsRead


class LitEntry:
  def __init__(self, json_file_loc, bibtex_file_loc):
    self.json_file_loc = json_file_loc
    self.bibtex_file_loc = bibtex_file_loc
    self.root_ = tk.Tk()
    self.literature_titles_ = []
    self.next_row_c0 = 1
    self.next_row_c1 = 0
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

    """
    Labels to Add:
    Document Type (Dropdown like month)

    For journals:
      Journal name
      volume
      issue
      article number (enumerated)
      pages (count or page numbers)

    For conference:
      Proceedings title
      series
      conference dates
      conference location
      publisher
      address
      pages

    For book:
      Edition
      publisher
      address
    """

    # Create All labels
    tk.Label(self.right_frame, text="Title", font=self.f).grid(row=self.generate_row_number(0), column=0,
                                                               sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Year", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Month", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Authors", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Link", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="DOI", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Document Type", font=self.f).grid(row=self.generate_row_number(0), column=0,
                                                                 sticky=tk.W, pady=10)
    self.other_doc_label = tk.Label(self.right_frame, text="Input Document Type", font=self.f)
    self.other_doc_position = self.generate_row_number(0)

    # Specific to Journals
    self.journal_name_label = tk.Label(self.right_frame, text="Journal Name", font=self.f)
    self.journal_volume_label = tk.Label(self.right_frame, text="Volume", font=self.f)
    self.journal_issue_label = tk.Label(self.right_frame, text="Issue", font=self.f)
    self.journal_pages_label = tk.Label(self.right_frame, text="Pages", font=self.f)
    self.journal_article_no_label = tk.Label(self.right_frame, text="Article Number", font=self.f)
    self.journal_name_position = self.generate_row_number(0)
    self.journal_volume_position = self.generate_row_number(0)
    self.journal_issue_position = self.generate_row_number(0)
    self.journal_pages_position = self.generate_row_number(0)
    self.journal_article_no_position = self.generate_row_number(0)

    # Specific to conferences
    self.conference_name_label = tk.Label(self.right_frame, text="Conference Name", font=self.f)
    self.conference_series_label = tk.Label(self.right_frame, text="Series", font=self.f)
    self.conference_location_label = tk.Label(self.right_frame, text="Location", font=self.f)
    self.conference_publisher_label = tk.Label(self.right_frame, text="Publisher", font=self.f)
    self.conference_address_label = tk.Label(self.right_frame, text="Addrress", font=self.f)
    self.conference_pages_label = tk.Label(self.right_frame, text="Pages", font=self.f)
    self.conference_article_no_label = tk.Label(self.right_frame, text="Article Number", font=self.f)
    self.conference_name_position = self.generate_row_number(0)
    self.conference_series_position = self.generate_row_number(0)
    self.conference_location_position = self.generate_row_number(0)
    self.conference_publisher_position = self.generate_row_number(0)
    self.conference_address_position = self.generate_row_number(0)
    self.conference_pages_position = self.generate_row_number(0)
    self.conference_article_no_position = self.generate_row_number(0)

    # Other info
    tk.Label(self.right_frame, text="Other Document\nInformation", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)

    tk.Label(self.right_frame, text="Aims and\nResearch Questions", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W,
                                                                                   pady=10)
    tk.Label(self.right_frame, text="Methods", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Results", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Discussion", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)
    tk.Label(self.right_frame, text="Tags", font=self.f).grid(row=self.generate_row_number(0), column=0, sticky=tk.W, pady=10)

    tk.Label(self.right_frame, text="Literature Entry", font=("Times", 16)).grid(row=self.generate_row_number(1),
                                                                                 column=1, sticky=tk.N,
                                                                                   pady=10)

    # Title
    self.register_title = tk.Text(self.right_frame, font=self.f, wrap="word", width=40, height=3)
    self.register_title.grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)  # title

    # Set years
    self.register_year = tk.Entry(self.right_frame, font=self.f)
    self.register_year.grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)

    # Create months
    self.months = np.arange(1, 13).tolist()
    self.months = ["None"] + self.months
    self.months_var = tk.StringVar(self.root_)
    self.months_var.set(self.months[0])  # Default to None
    tk.OptionMenu(self.right_frame, self.months_var, *self.months).grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)

    # Authors
    self.authorframe = tk.Frame(self.right_frame, bg='#CCCCCC')  # Create new frame
    self.authorframe.grid(row=self.generate_row_number(1), column=1, columnspan=1)
    self.author_btn = tk.Button(self.authorframe, text="Add Author", command=self.add_author_entry, width=15,
                                font=self.f, relief=tk.SOLID, cursor='hand2')
    self.author_btn.grid(row=1, column=0, pady=10, padx=20, columnspan=1)

    # Link and DOI
    self.register_link = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_link.grid(row=self.generate_row_number(1), column=1, pady=30, padx=20)
    self.register_doi = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_doi.grid(row=self.generate_row_number(1), column=1, pady=30, padx=20)

    # Document Type
    self.doc_type = ["Journal Article", "Conference Paper", "Other"]
    self.doc_var = tk.StringVar(self.root_)
    self.doc_var.set(self.doc_type[0])  # Default to None
    tk.OptionMenu(self.right_frame, self.doc_var, *self.doc_type, command=self.doc_choices).grid(
      row=self.generate_row_number(
      1),
                                                                                  column=1,
                                                                        pady=10, padx=20)

    # Other Doc Type
    self.register_other_doc_type = tk.Entry(self.right_frame, font=self.f, width=50)
    _ = self.generate_row_number(1)

    ### For Journals
    self.register_journal_name = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_journal_volume = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_journal_issue = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_journal_pages = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_journal_article_no = tk.Entry(self.right_frame, font=self.f, width=50)
    for i in range(5):
      _ = self.generate_row_number(1)

    # For conferences
    self.register_conference_name = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_conference_series = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_conference_location = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_conference_publisher = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_conference_address = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_conference_pages = tk.Entry(self.right_frame, font=self.f, width=50)
    self.register_conference_article_no = tk.Entry(self.right_frame, font=self.f, width=50)
    for i in range(7):
      _ = self.generate_row_number(1)

    # Set up for journal
    self.doc_choices(self.doc_type[0])

    self.register_other_doc_info = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_other_doc_info.grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)  # title

    # aims
    self.register_aims_questions = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_aims_questions.grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)  # title

    # Methods
    self.register_methods = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_methods.grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)  # title

    # Results
    self.register_results = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_results.grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)  # title

    # Discussion
    self.register_discussion = tk.Text(self.right_frame, wrap="word", font=self.f, width=60, height=5)
    self.register_discussion.grid(row=self.generate_row_number(1), column=1, pady=10, padx=20)  # title

    # Tags
    self.tagframe = tk.Frame(self.right_frame, bg='#CCCCCC')  # Create new frame
    self.tagframe.grid(row=self.generate_row_number(1), column=1, columnspan=1)
    self.tag_btn = tk.Button(self.tagframe, text="Add Tag", command=self.add_tag_entry, width=15, font=self.f,
                            relief=tk.SOLID,
                        cursor='hand2')
    self.tag_btn.grid(row=1, column=0, pady=10, padx=20)

    # Buttons
    button_frame = tk.Frame(self.right_frame)
    button_frame.grid(row=self.generate_row_number(1), column=1, columnspan=2, pady=30)

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

  def doc_choices(self, choice):
    if choice == self.doc_type[self.doc_type.index("Journal Article")]:
      self.journal_name_label.grid(row=self.journal_name_position, column=0, pady=30, padx=20)
      self.journal_issue_label.grid(row=self.journal_issue_position, column=0, pady=30, padx=20)
      self.journal_volume_label.grid(row=self.journal_volume_position, column=0, pady=30, padx=20)
      self.journal_pages_label.grid(row=self.journal_pages_position, column=0, pady=30, padx=20)
      self.journal_article_no_label.grid(row=self.journal_article_no_position, column=0, pady=30, padx=20)
      self.register_journal_name.grid(row=self.journal_name_position, column=1, pady=30, padx=20)
      self.register_journal_issue.grid(row=self.journal_issue_position, column=1, pady=30, padx=20)
      self.register_journal_volume.grid(row=self.journal_volume_position, column=1, pady=30, padx=20)
      self.register_journal_pages.grid(row=self.journal_pages_position, column=1, pady=30, padx=20)
      self.register_journal_article_no.grid(row=self.journal_article_no_position, column=1, pady=30, padx=20)
    else:
      self.journal_name_label.grid_forget()
      self.journal_issue_label.grid_forget()
      self.journal_volume_label.grid_forget()
      self.journal_pages_label.grid_forget()
      self.journal_article_no_label.grid_forget()
      self.register_journal_name.grid_forget()
      self.register_journal_issue.grid_forget()
      self.register_journal_volume.grid_forget()
      self.register_journal_pages.grid_forget()
      self.register_journal_article_no.grid_forget()

    if choice == self.doc_type[self.doc_type.index("Conference Paper")]:
      self.register_conference_name.grid(row=self.conference_name_position, column=1, pady=30, padx=20)
      self.register_conference_series.grid(row=self.conference_series_position, column=1, pady=30, padx=20)
      self.register_conference_location.grid(row=self.conference_location_position, column=1, pady=30, padx=20)
      self.register_conference_publisher.grid(row=self.conference_publisher_position, column=1, pady=30, padx=20)
      self.register_conference_address.grid(row=self.conference_address_position, column=1, pady=30, padx=20)
      self.register_conference_pages.grid(row=self.conference_pages_position, column=1, pady=30, padx=20)
      self.register_conference_article_no.grid(row=self.conference_article_no_position, column=1, pady=30, padx=20)
      self.conference_name_label.grid(row=self.conference_name_position, column=0, pady=30, padx=20)
      self.conference_series_label.grid(row=self.conference_series_position, column=0, pady=30, padx=20)
      self.conference_location_label.grid(row=self.conference_location_position, column=0, pady=30, padx=20)
      self.conference_publisher_label.grid(row=self.conference_publisher_position, column=0, pady=30, padx=20)
      self.conference_address_label.grid(row=self.conference_address_position, column=0, pady=30, padx=20)
      self.conference_pages_label.grid(row=self.conference_pages_position, column=0, pady=30, padx=20)
      self.conference_article_no_label.grid(row=self.conference_article_no_position, column=0, pady=30, padx=20)
    else:
      self.register_conference_name.grid_forget()
      self.register_conference_series.grid_forget()
      self.register_conference_location.grid_forget()
      self.register_conference_publisher.grid_forget()
      self.register_conference_address.grid_forget()
      self.register_conference_pages.grid_forget()
      self.register_conference_article_no.grid_forget()

      self.conference_name_label.grid_forget()
      self.conference_series_label.grid_forget()
      self.conference_location_label.grid_forget()
      self.conference_publisher_label.grid_forget()
      self.conference_address_label.grid_forget()
      self.conference_pages_label.grid_forget()
      self.conference_article_no_label.grid_forget()

    if choice == self.doc_type[self.doc_type.index("Other")]:
      self.register_other_doc_type.grid(row=self.other_doc_position, column=1, pady=30, padx=20)
      self.other_doc_label.grid(row=self.other_doc_position, column=0, sticky=tk.W, pady=10)
    else:
      self.register_other_doc_type.grid_forget()
      self.other_doc_label.grid_forget()

  def clear_fields(self):
    self.register_title.delete("1.0", "end")
    self.register_year.delete(0, "end")
    self.months_var.set(self.months[0])
    self.register_link.delete(0, "end")
    self.register_doi.delete(0, "end")

    # Journal
    self.register_journal_name.delete(0, "end")
    self.register_journal_volume.delete(0, "end")
    self.register_journal_issue.delete(0, "end")
    self.register_journal_pages.delete(0, "end")
    self.register_journal_article_no.delete(0, "end")

    # Conference
    self.register_conference_name.delete(0, "end")
    self.register_conference_series.delete(0, "end")
    self.register_conference_location.delete(0, "end")
    self.register_conference_publisher.delete(0, "end")
    self.register_conference_address.delete(0, "end")
    self.register_conference_pages.delete(0, "end")
    self.register_conference_article_no.delete(0, "end")

    # Other
    self.register_other_doc_info.delete("1.0", "end")
    self.register_other_doc_type.delete(0, "end")

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

  def generate_row_number(self, col_number: int):
    if col_number == 0:
      return_row = self.next_row_c0
      self.next_row_c0 += 1
      return return_row
    elif col_number == 1:
      return_row = self.next_row_c1
      self.next_row_c1 += 1
      return return_row

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
      "doi": self.register_doi.get(),
      "document_type": self.doc_var.get(),
      "other_info": self.register_other_doc_info.get("1.0", "end"),
      "aims_questions": self.register_aims_questions.get("1.0", "end").replace("\n", ""),
      "methods": self.register_methods.get("1.0", "end").replace("\n", ""),
      "results": self.register_results.get("1.0", "end").replace("\n", ""),
      "discussion": self.register_discussion.get("1.0", "end").replace("\n", ""),
      "tags": tags
    }]

    if self.doc_var.get() == "Journal Article":
      data[0]["journal_name"] = self.register_journal_name.get()
      data[0]["journal_volume"] = self.register_journal_volume.get()
      data[0]["journal_issue"] = self.register_journal_issue.get()
      data[0]["journal_pages"] = self.register_journal_pages.get()
      data[0]["journal_article_no"] = self.register_journal_article_no.get()

    elif self.doc_var.get() == "Conference Paper":
      data[0]["conference_name"] = self.register_conference_name.get()
      data[0]["conference_series"] = self.register_conference_series.get()
      data[0]["conference_location"] = self.register_conference_location.get()
      data[0]["conference_publisher"] = self.register_conference_publisher.get()
      data[0]["conference_address"] = self.register_conference_address.get()
      data[0]["conference_pages"] = self.register_conference_pages.get()
      data[0]["conference_article_no"] = self.register_conference_article_no.get()

    elif self.doc_var.get() == "Other":
      data[0]["document_type"] = self.register_other_doc_type.get()

    try:
      with open(self.json_file_loc, "r") as jfile:
        jfile: SupportsRead
        json_file_data = json.load(jfile)
    except json.decoder.JSONDecodeError:
      json_file_data = []

    json_file_data += data

    json_file_data = sorted(json_file_data, key=lambda d: d["title"])
    with open(self.json_file_loc, "w") as jfile:
      jfile: SupportsWrite[str]
      json.dump(json_file_data, jfile)

    self.create_bibtex()
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

    lit_data = sorted(lit_data, key=lambda d: d["title"])
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

    self.create_bibtex()
    mb.showinfo("Sucess", "Entry Successfully Deleted")

  def confirm_edit_choice(self):
    if self.edit_window is None:
      return

    self.edit_window.destroy()
    self.edit_window = None

    with open(self.json_file_loc, "r") as f:
      lit_data = json.load(f)

    lit_data = sorted(lit_data, key=lambda d: d["title"])
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
    title_ = entry["title"] if "title" in keys else ""
    year = entry["year"] if "year" in keys else ""
    link = entry["link"] if "link" in keys else ""
    doi = entry["doi"] if "doi" in keys else ""
    journal_name = entry["journal_name"] if "journal_name" in keys else ""
    journal_volume = entry["journal_volume"] if "journal_volume" in keys else ""
    journal_issue = entry["journal_issue"] if "journal_issue" in keys else ""
    journal_pages = entry["journal_pages"] if "journal_pages" in keys else ""
    journal_article_no = entry["journal_article_no"] if "journal_article_no" in keys else ""

    conference_name = entry["conference_name"] if "conference_name" in keys else ""
    conference_series = entry["conference_series"] if "conference_series" in keys else ""
    conference_location = entry["conference_location"] if "conference_location" in keys else ""
    conference_publisher = entry["conference_publisher"] if "conference_publisher" in keys else ""
    conference_address = entry["conference_address"] if "conference_address" in keys else ""
    conference_pages = entry["conference_pages"] if "conference_pages" in keys else ""
    conference_article_no = entry["conference_article_no"] if "conference_article_no" in keys else ""

    aims_questions = entry["aims_questions"] if "aims_questions" in keys else ""
    methods = entry["methods"] if "methods" in keys else ""
    results = entry["results"] if "results" in keys else ""
    discussion = entry["discussion"] if "discussion" in keys else ""

    # Set fields
    self.clear_fields()
    self.register_title.insert("1.0", title_)
    self.register_year.insert(0, year)
    self.register_link.insert(0, link)
    self.register_doi.insert(0, doi)

    # Journal fields
    self.register_journal_name.insert(0, journal_name)
    self.register_journal_volume.insert(0, journal_volume)
    self.register_journal_issue.insert(0, journal_issue)
    self.register_journal_pages.insert(0, journal_pages)
    self.register_journal_article_no.insert(0, journal_article_no)

    # Conference fields
    self.register_conference_name.insert(0, conference_name)
    self.register_conference_series.insert(0, conference_series)
    self.register_conference_location.insert(0, conference_location)
    self.register_conference_publisher.insert(0, conference_publisher)
    self.register_conference_address.insert(0, conference_address)
    self.register_conference_pages.insert(0, conference_pages)
    self.register_conference_article_no.insert(0, conference_article_no)

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

    # Set Document type
    if "document_type" in keys:
      if entry["document_type"] in self.doc_type:
        self.doc_var.set(entry["document_type"])
        if entry["document_type"] == "Other":
          self.register_other_doc_type.insert(0, entry["document_type"])
      else:
        self.doc_var.set(self.doc_type[0])
    else:
      self.doc_var.set(self.doc_type[0])

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

    self.create_bibtex()
    self.doc_choices(self.doc_var.get())

  def create_bibtex(self):

    with open(self.json_file_loc, "r") as jfile:
      jfile: SupportsRead
      json_file_data = json.load(jfile)

    for i, val in enumerate(json_file_data):
      if "other_info" in val.keys():
        json_file_data[i]["other_info"] = json_file_data[i]["other_info"].replace(" - ", " = ")

    with open(self.json_file_loc, "w") as jfile:
      jfile: SupportsWrite
      json.dump(json_file_data, jfile)

    with open(self.json_file_loc, "r") as f:
      lit_data = json.load(f)

    doc_map = {
      "Journal Article": "article",
      "Conference Paper": "inproceedings",
      "Other": "misc"
    }

    month_map = {
      1: "jan",
      2: "feb",
      3: "mar",
      4: "apr",
      5: "may",
      6: "jun",
      7: "jul",
      8: "oct",
      9: "sep",
      10: "oct",
      11: "nov",
      12: "dec"
    }

    def add_value(current_string, name, value_):
      current_string += f",\n{name} = {{{value_}}}"
      return current_string

    with (open(self.bibtex_file_loc, "w") as f):
      for entry in lit_data:
        other_info = entry["other_info"] if "other_info" in entry.keys() else None
        other_dict = None
        if other_info is not None:
          other_info = other_info.split("\n")
          other_info = [[info] for info in other_info if len(info) > 0]
          other_dict = {}
          for info in other_info:
            info = info[0].replace(" = ", "=").replace("= ", "=").replace(" =", "=").split("=")
            other_dict[info[0]] = info[1]

        if "document_type" in entry.keys():
          try:
            doc_type = doc_map[entry["document_type"]]
          except KeyError:
            doc_type = entry["document_type"]
        else:
          doc_type = "misc"

        title_ = entry["title"]
        short_title = title_.split()[0]
        year = str(entry["year"])
        month = entry["month"] if "month" in entry.keys() and entry["month"] != 0 else None
        link = entry["link"] if "link" in entry.keys() and entry["link"] != "" else None
        doi = entry["doi"] if "doi" in entry.keys() and entry["doi"] != "" else None
        if "authors" in entry.keys() and len(entry["authors"]) != 0:
          author = entry["authors"][0].split()[-1]
          authors = [[author][0].split() for author in entry["authors"]]
          authors = [[author[-1], " ".join(author[:-1])] if len(author) > 1 else author for author in authors]
          authors = [", ".join(author) if len(author) > 1 else "".join(author) for author in authors]
          authors = " and ".join(authors)
        else:
          author = "noauthor"
          authors = None

        entry_string = (f"@{doc_type}{{{author}_{short_title}_{year},\n"
                        f"title = {{{title_}}},\n"
                        f"year = {{{year}}}")

        if month is not None:
          entry_string = add_value(entry_string, "month", month_map[month])
        if link is not None:
          entry_string = add_value(entry_string, "url", link)
        if doi is not None:
          entry_string = add_value(entry_string, "doi", doi)
        if authors is not None:
          entry_string = add_value(entry_string, "author", authors)

        if doc_type == "article":
          journal_name = entry["journal_name"] if "journal_name" in entry.keys() and entry["journal_name"] != "" else None
          volume = entry["journal_volume"] if "journal_volume" in entry.keys() and entry["journal_volume"] != "" else None
          issue = entry["journal_issue"] if "journal_issue" in entry.keys() and entry["journal_issue"] != "" else None
          pages = entry["journal_pages"] if "journal_pages" in entry.keys() and entry["journal_pages"] != "" else None
          article_no = entry["journal_article_no"] if "journal_article_no" in entry.keys() and \
            entry["journal_article_no"] != "" else None
          if journal_name is not None:
            entry_string = add_value(entry_string, "journal", journal_name)
          if volume is not None:
            entry_string = add_value(entry_string, "volume", volume)
          if issue is not None:
            entry_string = add_value(entry_string, "issue", issue)
          if pages is not None:
            entry_string = add_value(entry_string, "pages", pages)
          if article_no is not None:
            entry_string = add_value(entry_string, "articleno", article_no)

        elif doc_type == "inproceedings":
          conference_name = entry["conference_name"] if "conference_name" in entry.keys() and \
            entry["conference_name"] != "" else None
          conference_series = entry["conference_series"] if "conference_series" in entry.keys() and \
            entry["conference_series"] != "" else None
          conference_location = entry["conference_location"] if "conference_location" in entry.keys() and \
            entry["conference_location"] != "" else None
          conference_publisher = entry["conference_publisher"] if "conference_publisher" in entry.keys() and \
            entry["conference_publisher"] != "" else None
          conference_address = entry["conference_address"] if "conference_address" in entry.keys() and \
            entry["conference_address"] != "" else None
          conference_pages = entry["conference_pages"] if "conference_pages" in entry.keys() and \
            entry["conference_pages"] != "" else None
          conference_article_no = entry["conference_article_no"] if "conference_article_no" in entry.keys() and \
            entry["conference_article_no"] != "" else None
          if conference_name is not None:
            entry_string = add_value(entry_string, "booktitle", conference_name)
          if conference_series is not None:
            entry_string = add_value(entry_string, "series", conference_series)
          if conference_location is not None:
            entry_string = add_value(entry_string, "location", conference_location)
          if conference_publisher is not None:
            entry_string = add_value(entry_string, "publisher", conference_publisher)
          if conference_address is not None:
            entry_string = add_value(entry_string, "address", conference_address)
          if conference_pages is not None:
            entry_string = add_value(entry_string, "pages", conference_pages)
          if conference_article_no is not None:
            entry_string = add_value(entry_string, "articleno", conference_article_no)

        if other_dict is not None:
          for key, value in other_dict.items():
            entry_string = add_value(entry_string, key, value)

        entry_string += "\n}"
        f.write(entry_string)
        f.write("\n\n")


lit_entry = LitEntry("./src/assets/literature.json", "./src/assets/literature.bib")
lit_entry.root.mainloop()
